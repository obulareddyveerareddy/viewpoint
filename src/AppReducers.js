import {combineReducers}    from 'redux';
import userProfile  from './components/fleetmetric/UserProfileReducer';
import fleet        from './components/fleetmetric/fleet/FleetReducer';

const rootReducer = combineReducers({
    userProfile, fleet
});

export default rootReducer;
