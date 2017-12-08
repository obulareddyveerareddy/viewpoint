import { connect }      from 'react-redux'
import * as authActions from './Actions'
import LoginPage        from './LoginPage'
import fetch            from 'cross-fetch';

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    googleOAuthSignIn: () => {
      console.log('-------------------->>> googleOAuthSignIn <<<--------------------');
      fetch('/api/auth/google', {method: "GET"})
      .then((resp) => resp.json())
      .then(function(data) {
          console.log(data);
          //dispatch(authActions.validateUserLoginDetails(data));
      });
    }
  }
}

const LoginLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default LoginLink
