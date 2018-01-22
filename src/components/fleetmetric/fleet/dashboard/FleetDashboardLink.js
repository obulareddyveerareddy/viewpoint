import { connect }          from 'react-redux';
import FleetDashboardPage   from './FleetDashboardPage';

const mapStateToProps = (state, ownProps) => {
  return {
    userProfile:state.userProfile,
    fleet:state.fleet
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
    
  }
}

const FleetDashboardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(FleetDashboardPage)

export default FleetDashboardLink
