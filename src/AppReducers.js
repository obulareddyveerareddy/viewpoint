import {combineReducers}    from 'redux';
import auth         from './components/fleetmetric/auth/Reducer';
import googleOAuth  from './components/fleetmetric/home/Reducer';

const rootReducer = combineReducers({
auth, googleOAuth
});

export default rootReducer;
