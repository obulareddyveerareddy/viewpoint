import * as actionTypes from './../actiontypes/FleetTypes';

export function fetchFleet(){
    return { type: actionTypes.FETCH_FLEET};
}

export function fetchFleetSuccess(response){
    console.log('~~~~~~~~~~~~~~~~~~~~~ >>> actionTypes.FETCH_FLEET_SUCCESS <<< ~~~~~~~~~~~~~~~~~~~~~');
    return { type: actionTypes.FETCH_FLEET_SUCCESS, response};
}

export function fetchFleetFailure(response){
    return { type: actionTypes.FETCH_FLEET_FAILURE, response};
}

export function saveNewFleet(newFleet){
    console.log('~~~~~~~~~~~~~ FleetActions <===> saveNewFleet ',newFleet);
    return { type: actionTypes.SAVE_NEW_FLEET, newFleet};
}

export function saveNewFleetSuccess(response){
    console.log('~~~~~~~~~~~~~~~~~~~~~ >>> actionTypes.SAVE_NEW_FLEET_SUCCESS <<< ~~~~~~~~~~~~~~~~~~~~~');
    return { type: actionTypes.SAVE_NEW_FLEET_SUCCESS, response};
}


export function saveNewFleetFailure(response){
    return { type: actionTypes.SAVE_NEW_FLEET_FAILURE, response};
}