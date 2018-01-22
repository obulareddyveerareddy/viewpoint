import {take, put, call, apply} from 'redux-saga/effects';
import * as userProfileApis     from './../apis/UserProfileApis'; 

export function* fetchLoggedInUserProfile(){
    try{
        console.log(':::::::::::> fetchLoggedInUserProfile() triggered <::::::::::::');
        yield take('FETCH_USERPROFILE');
        const response      = yield call(userProfileApis.fetchLoggedInUserProfile);
        const userProfile   = yield apply(response, response.json);
        console.log("userProfile?",userProfile);
        yield put({type: 'FETCH_USERPROFILE_SUCCESS', payload: userProfile});
    }catch(error){
        yield put({type: 'FETCH_USERPROFILEFAILED', error});
    }
}