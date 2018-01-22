import { connect }        from 'react-redux';
import DashboardPage      from './DashboardPage';

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

const DashboardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage)

export default DashboardLink
