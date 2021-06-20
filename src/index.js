import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../CSS/index.css';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

let app = document.getElementById('root');

if (app) {
  const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
  if (path) {
    history.replace(path);
  }
}

ReactDOM.render(<App />, app );
