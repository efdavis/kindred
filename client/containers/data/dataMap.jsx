import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';
// import axios from 'axios';
import * as topojson from 'topojson';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../../styles/index.css';

  // in dataMap merge the object associated qith requested question with geo data
    // for each in geometry, if prop.stateabbrev === state abbreviation, set data and continue

// Resources for responsive map:
// http://bl.ocks.org/jczaplew/4444770
// http://eyeseast.github.io/visible-data/2013/08/26/responsive-d3/
class DataMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('stateData from axios call: ', this.props.stateData);
    console.log('this.props.questionChoice', this.props.questionChoice);
    console.log('geoStates', this.props.geoStates);    
  }

  mergeTopoWithStateData(nextprops) {
    let question = this.props.questionChoice ? this.props.questionChoice : Object.keys(nextprops.stateData)[0];
    let stateData = nextprops.stateData;
    console.log('stateData to merge with topo: ', stateData);
    let mergeData = nextprops.topoData;
    mergeData.objects.usStates.geometries.forEach((topoState, i) => {
      let state = topoState.properties.STATE_ABBR;
      mergeData.objects.usStates.geometries[i].properties.data = stateData[question][state];
    });
    this.setState({mergeData: mergeData});
  }

  componentWillReceiveProps(nextprops) {
    this.mergeTopoWithStateData(nextprops);
  }

  sizeChange() {
    d3.select("g").attr("transform", "scale(" + $("#mapcontainer").width()/900 + ")");
    $("svg").height($("#mapcontainer").width() * 0.618);
  }

  componentDidMount() {
    this.sizeChange();
  }

  render() {
    console.log("props in map component: ", this.props.stateData);
    console.log("this.props.topoData.objects.usStates: ", this.props.topoData.objects.usStates);
    if (this.state.mergeData) {
      console.log('merged data in render: ', this.state.mergeData);
    d3.select(window).on('resize', this.sizeChange);
    
    var datamapContainer = Faux.createElement('div');   
    
    d3.select(datamapContainer)
      .attr('id', "mapcontainer");

    var hoverInfo = d3.select(datamapContainer)
      .append('div')
      .attr('id', 'hoverinfo')
      .classed('hide', true);
    
    var svg = d3.select(datamapContainer).append('svg')
      .attr("width", "100%")
        .append("g");
    
    var projection = d3.geoAlbersUsa()
      .scale(900);
    
    var path = d3.geoPath()
      .projection(projection);
  
    svg.selectAll('.states')
      .data(topojson.feature(this.state.mergeData, this.state.mergeData.objects.usStates).features)
      .enter()
      .append('path')
      .style('fill', 'orange')
      .attr('class', 'states')
      .attr('d', path)
      .on('mouseover', (d) => {
        console.log('d', d.properties);
        // console.log('this', this);
        var name = d.properties.STATE_ABBR;
        var data = {total: d.properties.data.total};

        console.log('this.state.mergeData ', this.state.mergeData.objects.usStates);
        for (let answer in this.state.mergeData[name].answers) {
          data[answer] = this.state.mergeData[name].answers[answer];
        }
        console.log('this is d: ', d);
        return d3.select(hoverinfo)
          .classed('hide', false)
          .text(name + ' : ' + data);
      }) 
      .on("mousemove", () => {
        d3.select(hoverinfo)
          .style("top", (d3.event.pageY-10)+"px")
          .style("left",(d3.event.pageX+10)+"px");
      })
      .on('mouseout', () => {
        d3.select(hoverinfo)
          .classed('hide', true);
      });
    return datamapContainer.toReact();
    } else {
      return null;
    }
    
  }
}

function mapStateToProps (state) {
  return {
    stateData: state.stateDataReducer,
    stateDefaults: state.stateDefaults,
    topoData: state.topoData,
    geoStates: state.geoStates,
    questionChoice: state.dataChoice.questionData
  };
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DataMap);