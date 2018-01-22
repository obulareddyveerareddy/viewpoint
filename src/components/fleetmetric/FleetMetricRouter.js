import React    from 'react';
import $        from 'jquery';
import {Route, Switch, Redirect} from 'react-router-dom';
import './FleetMetricRouter.scss';

import Nav            from './../common/Nav';
import Sidebar        from './../common/Sidebar';
import DashboardLink  from './dashboard/DashboardLink';
import FleetRouter    from './fleet/FleetRouter';

class PortfolioRouter extends React.Component{

  constructor(props){
    super(props);
    
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }
  
  componentWillMount(){
    this.props.getGoogleLogUserProfile();
  }
  
  toggleSideBar(event){
    event.preventDefault();
    $('#wrapper').toggleClass("toggled");
  }

  render(){
    let dataSource = this.props.userProfile;
    return(
      <div id="wrapper" className="toggled">
        <Nav toggleSideBar={this.toggleSideBar}></Nav>
        <Sidebar userProfile={this.props.userProfile}></Sidebar>
        <div id="page-content-wrapper">
            <Switch>
              <Route path="/fleetmetric/" exact component={DashboardLink} />
              <Route path="/fleetmetric/fleet/*" exact component={FleetRouter} />
            </Switch>
        </div>
      </div>
    );
  }

}

export default PortfolioRouter;
