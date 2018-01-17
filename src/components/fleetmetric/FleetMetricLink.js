import { connect }          from 'react-redux';
import * as fleetActions    from './FleetActions';
import fleetMetricRouter    from './FleetMetricRouter';
import fetch                from 'cross-fetch';

const mapStateToProps = (state, ownProps) => {
  return {
    userProfile:state.userProfile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getGoogleLogUserProfile:() =>{
      fetch('/api/auth/fleetmetric/user').then(function(response) {
        return response.json();
      })
      .then(function(responseAsJson) {
        dispatch(fleetActions.getGoogleLogUserProfile(responseAsJson));
      })
      .catch(function(err) {
        if(err){
          console.warn('---------------- Error :( ----------------');  
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
