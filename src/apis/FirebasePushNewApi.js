import {put}    from 'redux-saga/effects';
import _        from 'lodash';

export function* firebasePushNewEntryByRef(ref, payload) {
  try {
    console.log('~~~~~~~~~~~~~~~~~ firebasePushNewEntryByRef(..) Success ~~~~~~~~~~~~~~~~~');
    var insertData = ref.push(payload);
    payload.id     = insertData.getKey();
    yield put({type: 'SAVE_NEW_FLEET_SUCCESS', payload});
  } catch(error){
    console.log('~~~~~~~~~~~~~~~~~ firebasePushNewEntryByRef(..) failed ~~~~~~~~~~~~~~~~~');
    console.log(error);
    yield put({type: 'SAVE_NEW_FLEET_FAILURE', error});
  }
}