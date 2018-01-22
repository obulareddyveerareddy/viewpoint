import { connect }          from 'react-redux';
import FleetAddNewPage      from './FleetAddNewPage';
import * as FleetActions    from './../../../../actions/FleetActions';

const mapStateToProps = (state, ownProps) => {
  return {
    manageFleet:state.manageFleet
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveNewFleet:(newFleet) => {
      dispatch(FleetActions.saveNewFleet(newFleet))
    }
  }
}

const FleetAddNewLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(FleetAddNewPage)

export default FleetAddNewLink
