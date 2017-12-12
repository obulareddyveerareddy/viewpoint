import React    from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import HomeLink from './home/HomeLink';
import LoginLink from './auth/LoginLink';

class PortfolioRouter extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
    <Switch>
      <Route path="/fleetmetric/"     exact   component={HomeLink} />
      <Route path="/fleetmetric/login"     exact   component={LoginLink} />
    </Switch>
    );
  }

}

export default PortfolioRouter;
