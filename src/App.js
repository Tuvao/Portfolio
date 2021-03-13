import React, { Component } from 'react';
import sun from '../images/SVG/Sun.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={sun} className="App-logo" alt="logo" />
          <h2>Welcome to my page!</h2>
        </div>
        <p className="App-intro">
          Content is coming soon
        </p>
      </div>
    );
  }
}

export default App;
