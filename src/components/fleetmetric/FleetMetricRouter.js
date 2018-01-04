import React    from 'react';
import $        from 'jquery';
import {Route, Switch, Redirect} from 'react-router-dom';
import './FleetMetricRouter.scss';

import Nav          from './common/Nav';
import Sidebar      from './common/Sidebar';
import HomeLink     from './home/HomeLink';

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
            <div className="row bg-white">
              <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h4 className="page-title">Dashboard 1</h4> 
              </div>
              <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
              </div>          
            </div>
            <Switch>
              <Route path="/fleetmetric/" exact component={HomeLink} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }

}

export default PortfolioRouter;
