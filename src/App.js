import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {
  HashRouter, Route, Switch
} from "react-router-dom";
import { Home } from './Home/Home';
import { Footer } from './Nav/Footer';
import NavBar from './Nav/NavBar';
import { CreateNewHabit } from './Projects/HabitTracker/CreateNewHabit';
import { HabitTracker } from './Projects/HabitTracker/HabitTracker';
import { MusicProject } from './Projects/MusicProject/MusicProject';
import { ProjectMain } from './Projects/ProjectMain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <NavBar />

          <Switch>
            {/* <div className="container"> */}
              <Route path="/projects/:name" component={ProjectMain} />
              <Route path="/projects" component={ProjectMain} />
              <Route path="/dev/habit-tracker/add-new" component={CreateNewHabit} />
              <Route path="/dev/habit-tracker" component={HabitTracker} />
              <Route path="/dev/music-project" component={MusicProject} />
              <Route exact path="/" component={Home} />
            {/* </div> */}
          </Switch>

          <div>


          </div>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default App;




