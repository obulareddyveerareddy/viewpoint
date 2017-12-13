import * as types from './ActionTypes';

export function googleOAuthPermissions(googleOAuth){
  return {type:types.GOOGLE_OAUTH_PERMISSIONS, googleOAuth};
};
