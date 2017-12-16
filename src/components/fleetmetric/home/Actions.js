import * as types from './ActionTypes';

export function getGoogleLoggedUserProfile(userProfile){
    console.log('~~~~~~~~~~>>> Actions @ getGoogleLoggedUserProfile(.)');
    console.log(userProfile);
    return {type:types.GOOGLE_LOGGED_USER_PROFILE, userProfile};
};
