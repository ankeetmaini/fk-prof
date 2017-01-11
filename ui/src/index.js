import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Router,
  browserHistory
} from 'react-router';
import {Provider} from 'react-redux';

import 'material-design-lite/material.min.js';
import 'material-design-lite/material.css';

import store from './store';

import Root from './components/RootComponent';

import './index.css';

const routes = (
  <Route path="/" component={Root} />
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
