import { connect }      from 'react-redux';
import * as homeActions from './Actions';
import AddFleetPage     from './AddFleetPage';
import fetch            from 'cross-fetch';

const mapStateToProps = (state, ownProps) => {
    
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const AddFleetLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFleetPage)

export default AddFleetLink
