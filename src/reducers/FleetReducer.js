import * as actionTypes from './../actiontypes/FleetTypes';

export default function fleetReducer(state = {}, action){
    console.log('~~~~~~~~~~~~~~~~~~~~~ >>> FleetReducer.fetchFleetSuccess <<< ~~~~~~~~~~~~~~~~~~~~~');
    switch(action.type){
        case actionTypes.FETCH_FLEET_SUCCESS:
            return Object.assign({}, action.payload);
        default:
            return state;
    }
}