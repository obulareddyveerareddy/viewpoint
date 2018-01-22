import * as actionTypes from './../actiontypes/UserProfileTypes';

export default function fetchUserProfileSuccess(state = {}, action){
    switch(action.type){
        case actionTypes.FETCH_USERPROFILE_SUCCESS:
            return Object.assign({}, action.payload);
        default:
            return state;
    }
}
