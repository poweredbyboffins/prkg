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
  const country = ['China','USA','UK','Spain'];
  const regions = [
    { label: 'Hong Kong', value: 'Hong Kong' },
    { label: 'Xinjiang', value: 'Xinjiang' },
    { label: 'Tibet', value: 'Tibet' },
  
  ];
  
  
  
  

class Regional extends React.Component

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
      <h3>Country</h3>
    <Checkbox.Group options={country} defaultValue={['Apple']} onChange={onChange} />
    <br />
    <br />
    <h3>Region</h3>
    <Checkbox.Group options={regions} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <br />
    

    <Link to="/Graph" className="btn btn-primary">Run Simulation</Link>
          
  </div>
  //document.getElementById('container')
    );
}
}

export default Regional;