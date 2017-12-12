import * as types from './ActionTypes';

export default function user(state = {}, action){
    switch(action.type){
        case types.GET_FLEETMETRIC_ACTIVE_USER:
            return Object.assign({}, action.user);
        default:
            return state;
    }
}
