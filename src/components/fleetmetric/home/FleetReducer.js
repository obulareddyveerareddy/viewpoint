import * as types from './ActionTypes';

export default function getGoogleLoggedUserFleetDetails(state = {}, action){
    console.log('~~~~~~~~~~>>> Reducer @ getGoogleLoggedUserFleetDetails(.)');
    console.log(action);
    switch(action.type){
        case types.GOOGLE_LOGGED_USER_FLEET:
            return Object.assign({}, action.fleetDetails);
        default:
            return state;
    }
}
