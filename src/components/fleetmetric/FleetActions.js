import * as types from './FleetActionTypes';

export function getGoogleLogUserProfile(userProfile) {
    return { type: types.GOOGLE_LOGGED_USER_PROFILE, userProfile };
};

export function setUserFleetAssetsInToStore(fleet){
    return { type: types.GOOGLE_LOGGED_USER_FLEET, fleet };
}

export function getLoggedInUserFleets(fleet){
    return { type: types.LOGGED_IN_USER_FLEETS, fleet };
}