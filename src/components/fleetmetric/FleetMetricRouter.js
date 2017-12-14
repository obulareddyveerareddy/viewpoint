import React    from 'react';
import $        from 'jquery';
import {Route, Switch, Redirect} from 'react-router-dom';
import './FleetMetricRouter.scss';

import HomeLink from './home/HomeLink';

class PortfolioRouter extends React.Component{

  constructor(props){
    super(props);
    
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }
  
  toggleSideBar(){
    $("#sidemenubar").toggleClass("hide-sidebar");
    $("#page-wrapper div").toggleClass("toggle-page-wrapper-margin-l");
  }

  render(){
    console.log(this.props);
    return(
      <div id="wrapper">
        <nav className="navbar fixed-top navbar-dark bg-dark">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="top-left-part">
                <a className="logo text-white" href="index.html"><i className="fa fa-bus fa-2x" aria-hidden="true"> FleetMetric</i></a>
              </div>
              <div className="sidebar-toggle">
                <a className="logo text-white c-pointer" onClick={this.toggleSideBar}><i className="fa fa-bars fa-2x" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </nav>
        <div className="navbar-default sidebar" id="sidemenubar">
          <div className="sidebar-head mt-2">
            <span className="hidden-xs">
                <i className="fa fa-bus fa-2x" aria-hidden="true"> FleetMetric</i>
            </span>
          </div>
        </div>
        <div id="page-wrapper">
          <div className="container-fluid">
            <Switch>
              <Route path="/fleetmetric/"     exact   component={HomeLink} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }

}

export default PortfolioRouter;
