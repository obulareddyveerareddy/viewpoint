import { connect }      from 'react-redux';
import * as homeActions from './Actions';
import HomePage         from './HomePage';
import fetch            from 'cross-fetch';

const mapStateToProps = (state, ownProps) => {
  console.log('------------- mapStateToProps ------------');
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
        console.log('---------------- Error :( ----------------');
      });
    },
    getTenGoogleCalendarEventsByUser:() => {
      fetch('/api/google/calendar/events').then(function(response){
        console.log('---------------- /api/google/calendar/events :( ----------------');
        return response.json();
      })
      .then(function(responseAsJson) {
        console.log(responseAsJson);
      })
      .catch(function(err) {
        console.log('---------------- Error :( ----------------');
      });
    }
  }
}

const HomeLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default HomeLink
