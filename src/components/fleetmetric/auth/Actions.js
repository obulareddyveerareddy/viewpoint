import * as types from './ActionTypes';

export function validateUserLoginDetails(auth){
  return {type:types.GET_GOOGLE_LOGIN_AUTH_URL, auth};
};
