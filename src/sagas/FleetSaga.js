import {take, put, select, fork, call}    from 'redux-saga/effects';
import * as firebaseOnQEvent        from './../apis/FirebaseOnQEvent';
import * as FirebasePushNewApi      from './../apis/FirebasePushNewApi';
import firebaseDatabase             from './FirebaseDatabase';

export function* getFleetForDashboardPage(){
    try{
        console.log(':::::::::::> getFleetForDashboardPage() triggered <::::::::::::');
        yield take('FETCH_USERPROFILE_SUCCESS');
        const user = yield select(state => state.userProfile);
        console.log('fetchFleet@user?',user);
        yield fork(firebaseOnQEvent.getDataAndListenToChannel, firebaseDatabase.ref('fleet').child(user.id));
    }catch(error){
        yield put({type: 'FETCH_FLEET_FAILURE', error});
    }
}

export function* saveForFleetAddNewPage(){
    try{
        const { newFleet } = yield take('SAVE_NEW_FLEET');
        console.log(':::::::::::> saveForFleetAddNewPage() triggered <::::::::::::');
        console.log('FleetSaga --- SAVE_NEW_FLEET ', newFleet);
        const user = yield select(state => state.userProfile);
        console.log('fetchFleet@user?',user);
        yield call(FirebasePushNewApi.firebasePushNewEntryByRef, firebaseDatabase.ref('fleet').child(user.id), newFleet);
    }catch(error){
        yield put({type: 'FETCH_FLEET_FAILURE', error});
    }
}