import { connect }          from 'react-redux';
import * as homeActions     from './home/Actions';
import fleetMetricRouter    from './FleetMetricRouter';
import fetch                from 'cross-fetch';

const mapStateToProps = (state, ownProps) => {
  console.log('------------- FleetMetricLink <::::::> mapStateToProps ------------');
  console.log(state);
  return {
    userProfile:state.userProfile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getLoggedInUser:() =>{
      fetch('/api/auth/fleetmetric/user').then(function(response) {
        console.log('---------------- /api/auth/fleetmetric/user :( ----------------');
        return response.json();
      })
      .then(function(responseAsJson) {
        console.log(responseAsJson);
        dispatch(homeActions.getGoogleLoggedUserProfile(responseAsJson));
      })
      .catch(function(err) {
        if(err){
          console.log('---------------- Error :( ----------------');  
        }
      });
    }
  }
}

const FleetMetricLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(fleetMetricRouter)

export default FleetMetricLink
