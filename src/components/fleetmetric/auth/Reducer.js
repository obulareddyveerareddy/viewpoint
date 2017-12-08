import * as types from './ActionTypes';

export default function user(state = {googleLoginAuthUrl:''}, action){
    switch(action.type){
        case types.GET_GOOGLE_LOGIN_AUTH_URL:
            return Object.assign({}, action.auth);
        default:
            return state;
    }
}
