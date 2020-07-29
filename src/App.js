import React, { Component } from 'react'
import './App.css'
import Graph from './Graph'
import Home from './Home'
import Nav from './Nav'
import Details from './Details'
import piechart from './piechart'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Simulation from './Simulation'
import Scenario from './Scenario'
import CorpScenario from './CorpScenario'
import Regional from './Regional'

class App extends Component {
   render() {
   return (
     <Router>
      <div>
      <Nav />
      <Switch>
          <Route path="/graph" component={Graph} />
          <Route path="/details" component={Details} />
          <Route path="/piechart" component={piechart} />
          <Route path="/Sim2" component={Simulation} />
          <Route path="/Scenario" component={Scenario} />
          <Route path="/CorpScenario" component={CorpScenario} />
          <Route path="/Regional" component={Regional} />
          <Route path="/" exact component={Home} />

      </Switch>   
      </div>
      </Router>
   )
   }
}

export default App
