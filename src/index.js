import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserHistory } from "history";
import App from './App';


import * as serviceWorker from './serviceWorker';

import './assets/scss/style.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);


serviceWorker.unregister();
