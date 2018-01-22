import fetch from 'cross-fetch';

export function fetchLoggedInUserProfile(){
    console.log('~~~~~~~~~~~~~ >>> fetchLoggedInUserProfile() >> /api/auth/fleetmetric/user');
    return fetch('/api/auth/fleetmetric/user');
}