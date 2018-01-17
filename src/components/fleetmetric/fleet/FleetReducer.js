import * as types from './../FleetActionTypes';

export default function getLoggedInUserFleets(state = {fleet:{}}, action){
    switch(action.type){
        case types.LOGGED_IN_USER_FLEETS:
            return Object.assign({}, action.fleet);
        default:
            return state;
    }
}
