import * as actionTypes from './../actiontypes/UserProfileTypes';

export function fetchUserProfile(){
    return { type: actionTypes.FETCH_USERPROFILE};
}

export function fetchUserProfileSuccess(response){
    return { type: actionTypes.FETCH_USERPROFILE_SUCCESS, response};
}


export function fetchUserProfileFailure(response){
    return { type: actionTypes.FETCH_USERPROFILEFAILED, response};
}