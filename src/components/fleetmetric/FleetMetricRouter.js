import React    from 'react';
import $        from 'jquery';
import {Route, Switch, Redirect} from 'react-router-dom';
import './FleetMetricRouter.scss';

import Nav          from './common/Nav';
import Sidebar      from './common/Sidebar';
import HomeLink     from './home/HomeLink';
import AddFleetLink from './addfleet/AddFleetLink';

class PortfolioRouter extends React.Component{

  constructor(props){
    super(props);
    
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }
  
  componentWillMount(){
    this.props.getLoggedInUser();
  }
  
  toggleSideBar(event){
    event.preventDefault();
    $('#wrapper').toggleClass("toggled");
  }

  render(){
    let dataSource = this.props.userProfile;
    console.log('~~~~~~~~~~~~~~~~>>> FleetMetricRouter <<<~~~~~~~~~~~~~~~~');
    console.log(this.props);
    console.log(dataSource);
    return(
      <div id="wrapper" className="toggled">
        <Nav toggleSideBar={this.toggleSideBar}></Nav>
        <Sidebar userProfile={this.props.userProfile}></Sidebar>
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <Switch>
              <Route path="/fleetmetric/" exact component={HomeLink} />
              <Route path="/fleetmetric/fleet/add" exact component={AddFleetLink} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }

}

export default PortfolioRouter;
