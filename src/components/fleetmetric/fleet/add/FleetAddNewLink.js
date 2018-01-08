import { connect }          from 'react-redux';
import FleetAddNewPage      from './FleetAddNewPage';
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

const FleetAddNewLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(FleetAddNewPage)

export default FleetAddNewLink
