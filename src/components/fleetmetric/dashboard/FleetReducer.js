import * as types from './../FleetActionTypes';

export default function setUserFleetAssetsInToStore(state = {}, action){
    switch(action.type){
        case types.GOOGLE_LOGGED_USER_FLEET:
            console.log('~~~~~~~~~~~~~~~~~~~ >>> setUserFleetAssetsInToStore <<< ~~~~~~~~~~~~~~~~~~~');
            console.log('~~~~~~~~~~~~~~~~~~~ >>> action.fleet ', action.fleet);
            return Object.assign({}, action.fleet);
        default:
            return state;
    }
}
