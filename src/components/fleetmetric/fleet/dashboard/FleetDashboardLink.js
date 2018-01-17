import { connect }          from 'react-redux';
import FleetDashboardPage   from './FleetDashboardPage';
import FirebaseDatabase     from './../../../FirebaseDatabase';
import * as FleetActions    from './../../FleetActions';

const mapStateToProps = (state, ownProps) => {
  console.log('------------- FleetDashboardLink <::> mapStateToProps ------------');
  console.log(state);
  return {
    fleet:state.fleet,
    userProfile:state.userProfile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getLoggedInUserFleets:(userProfile) =>{
      if(userProfile.id){
        let loggedInUserFleetRef = FirebaseDatabase.ref('fleet').child(userProfile.id);
        loggedInUserFleetRef.on('value', (snapshot) => {
          console.log('~~~~~~~~~~~~~~~~~ >>> getLoggedInUserFleets:(.) <<< ~~~~~~~~~~~~~~~~~');
          console.log(snapshot.val());
          dispatch(FleetActions.getLoggedInUserFleets(snapshot.val()));
        })
      }
    }
  }
}

const FleetDashboardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(FleetDashboardPage)

export default FleetDashboardLink
