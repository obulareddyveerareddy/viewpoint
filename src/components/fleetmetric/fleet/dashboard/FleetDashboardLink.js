import { connect }          from 'react-redux';
import FleetDashboardPage   from './FleetDashboardPage';
import fetch                from 'cross-fetch';

const mapStateToProps = (state, ownProps) => {
  console.log('------------- mapStateToProps ------------');
  console.log(state);
  return {
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
