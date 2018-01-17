import { connect }        from 'react-redux';
import DashboardPage      from './DashboardPage';
import * as fleetActions  from './../FleetActions';
import FirebaseDatabase   from './../../FirebaseDatabase';

const mapStateToProps = (state, ownProps) => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~>> mapStateToProps <<~~~~~~~~~~~~~~~~~~~~~~');
  console.log(state);
  return {
    userProfile:state.userProfile,
    fleet:state.fleet
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~>> mapDispatchToProps <<~~~~~~~~~~~~~~~~~~~~~~');
  console.log(ownProps);
  return {
    
    getLoggedInUserFleetsByGoogleId(userProfileId){
      FirebaseDatabase.ref('/fleet').child(userProfileId).once('value', snap => {
        dispatch(fleetActions.setUserFleetAssetsInToStore(snap.val()));
      })
      .catch((error) => {
        console.warn(error);
      });
    }
  }
}

const DashboardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage)

export default DashboardLink
