import React    from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import HomePage from './home/HomePage';
import LoginPage from './auth/LoginPage';

class PortfolioRouter extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
    <Switch>
      <Route path="/fleetmetric/"     exact   component={HomePage} />
      <Route path="/fleetmetric/login"     exact   component={LoginPage} />
    </Switch>
    );
  }

}

export default PortfolioRouter;
