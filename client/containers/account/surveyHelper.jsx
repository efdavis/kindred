import React from 'react';
import { Select, Steps, Button, Input, InputNumber } from 'antd';

const Option = Select.Option;

const Zip = (<Input style={{ width: 400 }} placeholder="What is your zip code?" />);

const Age = (<InputNumber style={{ width: 400 }} placeholder= "How old are you?" min={1} max={123} defaultValue={25} />);

const Gender = (
    <Select
      showSearch
      style={{ width: 400}}
      placeholder="Choose your gender"
      optionFilterProp="children"
      onChange={() => { console.log('changed'); }}
      filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
      <Option value='0 Male'>Male</Option>
      <Option value='1 Female'>Female</Option>
      <Option value='2 Other'>Other</Option>
    </Select>
  );

const Ethnicity = (
    <Select
      showSearch
      style={{ width: 400}}
      placeholder="What is your Ethnicity?"
      optionFilterProp="children"
      onChange={() => { console.log('changed'); }}
      filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
      <Option value='0 African American'>African American</Option>
      <Option value='1 Asian'>Asian</Option>
      <Option value='2 Caucasian'>Caucasian</Option>
      <Option value='3 Hispanic Latino'>Hispanic or Latino</Option>
      <Option value='4 Pacific Islander'>Pacific Islander</Option>
      <Option value='5 Multi Racial'>Multi Racial</Option>
      <Option value='6 Other'>Other</Option>
    </Select>
);

const Income = (
  <Select
    showSearch
    style={{ width: 400}}
    placeholder="What is your annual income?"
    optionFilterProp="children"
    onChange={() => { console.log('changed'); }}
    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Option value='0 Zero to 30k'>$0 - $30,000</Option>
    <Option value='1 30k to 50k'>$30,000 - $50,000</Option>
    <Option value='2 50k to 75k'>$50,000 - $75,000</Option>
    <Option value='3 75k to 100k'>$75,000 - $100,000</Option>
    <Option value='4 100k to 150k'>$100,000 - $150,000</Option>
    <Option value='5 150k to 200k'>$150,000 - $200,000</Option>
    <Option value='6 200k plus'>Above $200,000</Option>
    <Option value='7 other'>I do not have an income</Option>
  </Select>
);

const Education = (
  <Select
    showSearch
    style={{ width: 400}}
    placeholder="What is your highest level of education?"
    optionFilterProp="children"
    onChange={() => { console.log('changed'); }}
    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Option value='0 Elementary'>Elementary</Option>
    <Option value='1 Some secondary'>Some secondary (Middle or High school)</Option>
    <Option value='2 Secondary'>Completed secondary</Option>
    <Option value='3 Some college'>Some college</Option>
    <Option value='4 Associate'>Associate degree (2 year college)</Option>
    <Option value='5 Bachelor'>Bachelor's degree (4 year college)</Option>
    <Option value='6 Master'>Master's degree</Option>
    <Option value='7 Doctorate'>Doctorate or professional degree</Option>
    <Option value='8 Home'>I was home schooled</Option>
    <Option value='9 Other'>Other</Option>
  </Select>
);

const Religiousity = (
  <Select
    showSearch
    style={{ width: 400}}
    placeholder="How spiritual are you as a person?"
    optionFilterProp="children"
    onChange={() => { console.log('changed'); }}
    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Option value='0 None'>I do not believe in any higher power</Option>
    <Option value='1 Higher power'>I believe in a higher power but do not follow a specific religion</Option>
    <Option value='2 Religious'>I follow a religion but do not actively practice it</Option>
    <Option value='3 Major Events'>I follow a religion and participate in its major events</Option>
    <Option value='4 Monthly'>I follow a religion and practice it at least once a month</Option>
    <Option value='5 Weekly'>I follow a religion and practice it at least once a week</Option>
    <Option value='6 Daily'>I follow a religion and practice it at least once a day</Option>
    <Option value='7 Often'>I follow a religion and practice it many times a day</Option>
    <Option value='8 Spiritual'>I consider myself spiritual, but it does not relate to religion</Option>
    <Option value='9 Other'>Other</Option>
  </Select>
);

const Religion = (
  <Select
    showSearch
    style={{ width: 400}}
    placeholder="What are your religious beliefs?"
    optionFilterProp="children"
    onChange={() => { console.log('changed'); }}
    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Option value='0 Atheist'>Atheist</Option>
    <Option value='1 Agnostic'>Agnostic</Option>
    <Option value='2 Buddhism'>Buddhist</Option>
    <Option value='3 Christianity'>Christian</Option>
    <Option value='4 Hinduism'>Hindu</Option>
    <Option value='5 Islam'>Islamic</Option>
    <Option value='6 Jewish'>Jewish</Option>
    <Option value='7 Other structured'>Other structured religion</Option>
    <Option value='8 Other'>Other</Option>
  </Select> 
);

const State = (
  <Select
    showSearch
    style={{ width: 400}}
    placeholder="What state do you live in?"
    optionFilterProp="children"
    onChange={() => { console.log('changed'); }}
    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Option value='AL Alabama'>Alabama</Option>
    <Option value='AK Alaska'>Alaska</Option>
    <Option value='AZ Arizona'>Arizona</Option>
    <Option value='AR Arkansas'>Arkansas</Option>
    <Option value='CA California'>California</Option>
    <Option value='CO Colorado'>Colorado</Option>
    <Option value='CT Connecticut'>Connecticut</Option>
    <Option value='DE Delaware'>Delaware</Option>
    <Option value='FL Florida'>Florida</Option>
    <Option value='GA Georgia'>Georgia</Option>
    <Option value='HI Hawaii'>Hawaii</Option>
    <Option value='ID Idaho'>Idaho</Option>
    <Option value='IL Illinois'>Illinois</Option>
    <Option value='IN Indiana'>Indiana</Option>
    <Option value='IA Iowa'>Iowa</Option>
    <Option value='KS Kansas'>Kansas</Option>
    <Option value='KY Kentucky'>Kentucky</Option>
    <Option value='LA Louisiana'>Louisiana</Option>
    <Option value='ME Maine'>Maine</Option>
    <Option value='MD Maryland'>Maryland</Option>
    <Option value='MA Massachusetts'>Massachusetts</Option>
    <Option value='MI Michigan'>Michigan</Option>
    <Option value='MN Minnesota'>Minnesota</Option>
    <Option value='MS Mississippi'>Mississippi</Option>
    <Option value='MO Missouri'>Missouri</Option>
    <Option value='MT Montana'>Montana</Option>
    <Option value='NE Nebraska'>Nebraska</Option>
    <Option value='NV Nevada'>Nevada</Option>
    <Option value='NH New Hampshire'>New Hampshire</Option>
    <Option value='NJ New Jersey'>New Jersey</Option>
    <Option value='NM New Mexico'>New Mexico</Option>
    <Option value='NY New York'>New York</Option>
    <Option value='NC North Carolina'>North Carolina</Option>
    <Option value='ND North Dakota'>North Dakota</Option>
    <Option value='OH Ohio'>Ohio</Option>
    <Option value='OK Oklahoma'>Oklahoma</Option>
    <Option value='OR Oregon'>Oregon</Option>
    <Option value='PA Pennsylvania'>Pennsylvania</Option>
    <Option value='RI Rhode'>Rhode Island</Option>
    <Option value='SC South Carolina'>South Carolina</Option>
    <Option value='SD South Dakota'>South Dakota</Option>
    <Option value='TN Tennessee'>Tennessee</Option>
    <Option value='TX Texas'>Texas</Option>
    <Option value='UT Utah'>Utah</Option>
    <Option value='VT Vermont'>Vermont</Option>
    <Option value='VA Virginia'>Virginia</Option>
    <Option value='WA Washington'>Washington</Option>
    <Option value='WV West Virginia'>West Virginia</Option>
    <Option value='WI Wisconsin'>Wisconsin</Option>
    <Option value='WY Wyoming'>Wyoming</Option>
  </Select> 
);

const Party = (
  <Select
    showSearch
    style={{ width: 400}}
    placeholder="What political party do you align with?"
    optionFilterProp="children"
    onChange={() => { console.log('changed'); }}
    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Option value='0 Democratic'>Democratic</Option>
    <Option value='1 Green'>Green</Option>
    <Option value='2 Independent'>Independent</Option>
    <Option value='3 Libertarian'>Libertarian</Option>
    <Option value='4 Republican'>Republican</Option>
    <Option value='5 Other'>Other</Option>
  </Select>
);

module.exports = {
  Zip: Zip,
  Age: Age,
  Gender: Gender,
  Ethnicity: Ethnicity,
  Income: Income,
  Education: Education,
  Religiousity: Religiousity,
  State: State,
  Party: Party
};