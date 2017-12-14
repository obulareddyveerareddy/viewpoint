import React    from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import LoginLink from './login/LoginLink';

class AuthRouter extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
    <Switch>
        <Route path="/auth/login" exact component={LoginLink} />
    </Switch>
    );
  }

}

export default AuthRouter;
