import {combineReducers}    from 'redux';
import auth         from './components/auth/login/Reducer';
import userProfile  from './components/fleetmetric/home/Reducer';
import fleetDetails from './components/fleetmetric/home/FleetReducer';

const rootReducer = combineReducers({
auth, userProfile, fleetDetails
});

export default rootReducer;
