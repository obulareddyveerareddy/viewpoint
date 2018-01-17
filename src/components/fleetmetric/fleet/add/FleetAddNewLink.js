import { connect }          from 'react-redux';
import FleetAddNewPage      from './FleetAddNewPage';
import fetch                from 'cross-fetch';
import FirebaseDatabase     from './../../../FirebaseDatabase';

const mapStateToProps = (state, ownProps) => {
  console.log('------------- mapStateToProps ------------');
  console.log(state);
  return {
    userProfile:state.userProfile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveNewFleet:(newFleet, userProfile) => {
      console.log('~~~~~~~~~~~~~~~~~~~~ >>> saveNewFleet(.) <<< ~~~~~~~~~~~~~~~~~~~~');
      let firebaseRef = FirebaseDatabase.ref("fleet");
      firebaseRef.child(userProfile.id).push(newFleet, (err)=>{
        if(err){
          console.log('~~~~~~~~~~~~~~~~~~~~ >>> Unable to push New Fleet Created');
        }else{
          console.log('~~~~~~~~~~~~~~~~~~~~ >>> New fleet created Successfully');
        }
      })
      
    }
  }
}

const FleetAddNewLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(FleetAddNewPage)

export default FleetAddNewLink
