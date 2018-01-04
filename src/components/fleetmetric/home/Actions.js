import * as types from './ActionTypes';

export function getGoogleLoggedUserProfile(userProfile){
    console.log('~~~~~~~~~~>>> Actions @ getGoogleLoggedUserProfile(.)');
    console.log(userProfile);
    return {type:types.GOOGLE_LOGGED_USER_PROFILE, userProfile};
};

export function getAllFleetDetails(fleetDetails){
    console.log('~~~~~~~~~~>>> Actions @ getAllFleetDetails(.)');
    console.log(fleetDetails);
    return {type:types.GOOGLE_LOGGED_USER_FLEET, fleetDetails};
}
