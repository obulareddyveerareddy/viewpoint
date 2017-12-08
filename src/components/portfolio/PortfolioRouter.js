import React    from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import HomePage from './home/HomePage';

class PortfolioRouter extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
    <Switch>
      <Route path="/"     exact   component={HomePage} />
    </Switch>
    );
  }

}

export default PortfolioRouter;
