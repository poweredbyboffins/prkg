import React from 'react';
import ReactDOM from 'react-dom';
//import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { AreaChartOutlined, DotChartOutlined, RadarChartOutlined, SettingOutlined , HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class Nav extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
       <Menu.Item key="home" icon={<HomeOutlined /> }>
        <Link to="/"></Link>
          Home
        </Menu.Item>
        <Menu.Item key="graph" icon={<AreaChartOutlined /> }>
        <Link to="/Scenario"></Link>
          GeoPolitical Scenario Analysis
        </Menu.Item>
        <Menu.Item key="app" icon={<DotChartOutlined />}>
        <Link to="/Regional"></Link>
          Internal Conflict
        </Menu.Item>
        <Menu.Item key="app" icon={<DotChartOutlined />}>
        <Link to="/CorpScenario"></Link>
          Corporate Political Risk
        </Menu.Item>
        <Menu.Item key="alipay"icon={<SettingOutlined />}>
        <Link to="/piechart"></Link>
            Calibration
          
        </Menu.Item>
      </Menu>
    );
  }
}

//ReactDOM.render(<Nav />, document.getElementById('container'));

export default Nav;