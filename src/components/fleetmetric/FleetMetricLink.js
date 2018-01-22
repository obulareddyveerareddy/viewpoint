import { connect }          from 'react-redux';
import * as userProfileActions    from './../../actions/UserProfileActions';
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
      dispatch(userProfileActions.fetchUserProfile());
    }
  }
}

const FleetMetricLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(fleetMetricRouter)

export default FleetMetricLink
