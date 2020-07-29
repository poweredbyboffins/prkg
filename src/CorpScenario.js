import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
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
  const industry = ['Technology','Pharma','Biotech','Manufacturing'];
  const scenarios = [
    { label: 'Trade Conflict', value: 'Trade' },
    { label: 'War', value: 'War' },
    { label: 'Activism', value: 'Activism' },
  
  ];
  
  
  

class CorpScenario extends React.Component

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
      <h3>Industry</h3>
    <Checkbox.Group options={industry} defaultValue={['Apple']} onChange={onChange} />
    <br />
    <br />
    <h3>Scenario</h3>
    <Checkbox.Group options={scenarios} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <br />
    

    <Link to="/Graph" className="btn btn-primary">Run Simulation</Link>
          
  </div>
  //document.getElementById('container')
    );
}
}

export default CorpScenario;