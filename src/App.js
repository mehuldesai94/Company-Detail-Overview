import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Overview from './Components/Overview'
import Projects from './Components/Projects'
import Teams from './Components/Teams'
import Employees from './Components/Employees'
import NotFound from './Components/NotFound';

class App extends Component {
  render() {
    let url = "https://intense-escarpment-52895.herokuapp.com/"
    return (
      <Switch>
        <Route exact path='/' render={()=>(
          <Overview title="Overview" dataSource={url}/>
        )}/>
        <Route exact path='/projects' render={()=>(
          <Projects title="Projects" dataSource={url}/>
        )}/>
        <Route exact path='/teams' render={()=>(
          <Teams title="Teams" dataSource={url}/>
        )}/>
        <Route exact path='/employees' render={()=>(
          <Employees title="Employees" dataSource={url}/>
        )}/>
        <Route render={()=>(
          <NotFound title="NotFound" dataSource={url}/>
        )}/>
      </Switch>
    );
  }
}

  export default App;