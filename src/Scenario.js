import React from 'react';
import ReactDOM from 'react-dom';
//import 'antd/dist/antd.css';
import './index.css';
import { Checkbox } from 'antd';
import Details from './Details';
import { Link } from 'react-router-dom';

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

function newComp(checkedValues)
{
  this.showComponent(Details);
}
  const regions = ['World', 'Asia', 'Europe', 'Americas','Africa','Pacific','Middle East'];
  const scenarios = [
    { label: 'Trade Conflict', value: 'Trade' },
    { label: 'War', value: 'War' },
    { label: 'Regime Change', value: 'RegimeChange' },
  
  ];
  
  const protagonists = [
      { label: 'USA', value: 'USA' },
      { label: 'China', value: 'China' },
      { label: 'India', value: 'India' },
      
    ];
    const ramifications = [
      { label: 'GDP', value: 'GDP' },
      { label: 'Unemployment', value: 'Unemployment' },
      { label: 'Further Conflict', value: 'Further Conflict' },
      
    ];
  
  

class Scenario extends React.Component

{

    state = {
        current: 'mail',
      };


/*const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
*/

render()
{
    const { current } = this.state;
   return (
  <div>
      <h3>Region</h3>
    <Checkbox.Group options={regions} defaultValue={['Apple']} onChange={onChange} />
    <br />
    <br />
    <h3>Scenario</h3>
    <Checkbox.Group options={scenarios} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <br />
    <h3>Protagonists</h3>
    <Checkbox.Group options={protagonists} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <br />
    <h3>Ramifications</h3>
    <Checkbox.Group options={ramifications} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <br />

    <Link to="/Details" className="btn btn-primary">Run Simulation</Link>
          
  </div>
  //document.getElementById('container')
    );
}
}

export default Scenario;