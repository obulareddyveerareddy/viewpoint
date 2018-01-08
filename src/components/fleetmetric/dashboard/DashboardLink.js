import { connect }      from 'react-redux';
import * as homeActions from './Actions';
import DashboardPage    from './DashboardPage';
import fetch            from 'cross-fetch';

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

const DashboardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage)

export default DashboardLink
