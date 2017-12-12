import * as types from './ActionTypes';

export function validateUserLoginDetails(user){
  return {type:types.GET_FLEETMETRIC_ACTIVE_USER, user};
};
