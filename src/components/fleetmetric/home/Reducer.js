import * as types from './ActionTypes';

export default function googleOAuth(state = {}, action){
    switch(action.type){
        case types.GOOGLE_OAUTH_PERMISSIONS:
            return Object.assign({}, action.googleOAuth);
        default:
            return state;
    }
}
