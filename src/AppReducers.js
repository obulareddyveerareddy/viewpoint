import {combineReducers}    from 'redux';
import auth from './components/fleetmetric/auth/Reducer';
import user from './components/fleetmetric/home/Reducer';

const rootReducer = combineReducers({
auth, user
});

export default rootReducer;
