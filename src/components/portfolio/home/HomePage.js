import React  from 'react';
import $      from 'jquery';

import SideNav from './SideNav';
import FleetMetricCard from './../cards/FleetMetricCard'
class HomePage extends React.Component{

  constructor(props){
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event){
    console.log(event);
    $(this.smMenu).toggle();
  }

  render(){
    return(
      <div id="main" className="d-flex flex-row flex-wrap">
      <nav className="col-sm-2 col-md-2 d-none d-sm-block bg-light sidebar" style={{padding:'0px'}}>
        <SideNav />
      </nav>
      <main role="main" className="col-sm-10 col-md-10">
        <div className="d-flex flex-column" style={{marginBottom:'2rem'}}>
          <div className="d-md-none d-sm-none d-xs-block" style={{backgroundColor: 'rgba(200, 200, 205, 0.71)'}}>
            <div className="d-flex justify-content-between">
              <h4>Portfolio</h4>
              <button className="btn" onClick={(event) => this.toggleMenu(event)}><i className="fa fa-bars" /></button>
            </div>
            <div className="sm-menu"  ref={(div) => { this.smMenu = div; }}>
              <SideNav />
            </div>
          </div>
          <div className="d-flex justify-content-center"><h2>A lovely selection of work</h2></div>
          <div className="row">
            <div className="col-md-12">
              <FleetMetricCard />
            </div>
          </div>
        </div>
      </main>
      </div>
    );
  }
}

export default HomePage;
