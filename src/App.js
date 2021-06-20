import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './Nav/NavBar';
import { Panel1 } from './Home/Panel1';
import { Panel2 } from './Home/Panel2';
import { ProjectMain } from './Projects/ProjectMain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />

          <Switch>
            <Route path="/projects/:name">
              <ProjectMain />
            </Route>
            <Route path="/projects">
              <ProjectMain />
            </Route>
            <Route path="/about-me">
              <div className="container">
                About me
              </div>
            </Route>
            <Route path="/">
              <div className="container">
                <Panel1 />
                <Panel2 />
              </div>
            </Route>
          </Switch>

        </Router>
        <div>


        </div>
      </div>
    );
  }
}

export default App;
