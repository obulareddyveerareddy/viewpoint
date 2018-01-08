import React    from 'react';
import $        from 'jquery';
import {Route, Switch, Redirect} from 'react-router-dom';
import './FleetRouter.scss';

import FleetDashboardLink from './dashboard/FleetDashboardLink';
import FleetAddNewLink    from './add/FleetAddNewLink';

class PortfolioRouter extends React.Component{

  constructor(props){
    super(props);
  }
  

  render(){
    return(
      <section className="content">
        <Switch>
          <Route path="/fleetmetric/fleet/dashboard" exact component={FleetDashboardLink} />
          <Route path="/fleetmetric/fleet/add"       exact component={FleetAddNewLink} />
        </Switch>
      </section>
    );
  }

}

export default PortfolioRouter;
