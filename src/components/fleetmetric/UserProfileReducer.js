import * as types from './FleetActionTypes';

export default function getGoogleLogUserProfile(state = {}, action){
    switch(action.type){
        case types.GOOGLE_LOGGED_USER_PROFILE:
            return Object.assign({}, action.userProfile);
        default:
            return state;
    }
}
