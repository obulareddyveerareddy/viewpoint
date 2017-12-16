import {combineReducers}    from 'redux';
import auth         from './components/auth/login/Reducer';
import userProfile  from './components/fleetmetric/home/Reducer';

const rootReducer = combineReducers({
auth, userProfile
});

export default rootReducer;
