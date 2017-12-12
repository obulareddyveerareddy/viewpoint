import { connect }      from 'react-redux';
import * as homeActions from './Actions';
import HomePage         from './HomePage';
import fetch            from 'cross-fetch';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFleetMetricActiveUser: () => {
      console.log('-------------------->>> googleOAuthSignIn <<<--------------------');
      fetch('/api/fleetmetric/active/user', {method: "GET"})
      .then((resp) => resp.json())
      .then(function(data) {
          console.log(data);
          //dispatch(authActions.validateUserLoginDetails(data));
      });
    }
  }
}

const HomeLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default HomeLink
