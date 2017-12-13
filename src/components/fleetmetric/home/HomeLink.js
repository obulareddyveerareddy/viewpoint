import { connect }      from 'react-redux';
import * as homeActions from './Actions';
import HomePage         from './HomePage';
import fetch            from 'cross-fetch';

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}

const HomeLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default HomeLink
