import * as types from './ActionTypes';

export default function getGoogleLoggedUserProfile(state = {}, action){
    console.log('~~~~~~~~~~>>> Reducer @ getGoogleLoggedUserProfile(.)');
    console.log(action);
    switch(action.type){
        case types.GOOGLE_LOGGED_USER_PROFILE:
            return Object.assign({}, action.userProfile);
        case types.GOOGLE_LOGGED_USER_FLEET:
            return Object.assign({}, action.fleetDetails);
        default:
            return state;
    }
}
