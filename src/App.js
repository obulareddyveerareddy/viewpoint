import React, { Component }       from 'react';
import { render }                 from 'react-dom';
import $                          from 'jquery';
import { HashRouter , Router }    from 'react-router-dom';
import MuiThemeProvider           from 'material-ui/styles/MuiThemeProvider';
import {Provider}                 from 'react-redux';
import configureStore             from './AppStore';
import {Route, Switch, Redirect}  from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import './App.scss';

import PortfolioRouter            from './components/portfolio/PortfolioRouter';
import FleetMetricRouter          from './components/fleetmetric/FleetMetricRouter';
import AuthRouter                 from './components/auth/AuthRouter';
const store = configureStore();

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
      <MuiThemeProvider>
      <HashRouter>
        <Switch>
          <Route path="/auth/**"          component={AuthRouter} />
          <Route path="/fleetmetric/**"   component={FleetMetricRouter} />
          <Route path="/"                 component={PortfolioRouter} />
        </Switch>
      </HashRouter>
      </MuiThemeProvider>
      </Provider>
    );
  }
}

render(
  <Main />,
  document.getElementById('app')
);
