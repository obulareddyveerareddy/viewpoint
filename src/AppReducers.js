import {combineReducers}    from 'redux';
import userProfile  from './reducers/UserProfileReducer';
import fleet        from './reducers/FleetReducer';
import manageFleet  from './reducers/ManageFleetReducer';

const rootReducer = combineReducers({
    userProfile, fleet, manageFleet
});

export default rootReducer;
