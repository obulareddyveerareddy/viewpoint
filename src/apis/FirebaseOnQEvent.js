import { eventChannel, buffers }    from 'redux-saga'
import {take, put, call, flush }    from 'redux-saga/effects';
import * as fleetTypes              from './../actiontypes/FleetTypes'
import _                            from 'lodash';

export function* fetchLoggedInUserFleet(ref) {
    const listener = eventChannel(emit => {
        ref.on('value', snap => {
            emit({
                eventType: fleetTypes.FETCH_FLEET_SUCCESS,
                payload: snap.val(),
            })
        });
        
        return () => {
            ref.off()
        }
    }, buffers.expanding(1));
    
    return listener
}

export function* getDataAndListenToChannel(ref) {
  const chan = yield call(fetchLoggedInUserFleet, ref)
  try {
    try {
        const snap = yield call([ref, ref.once], 'value');
        yield flush(chan);
        const val = snap.val()
        const fleet = val ? val : {}
        yield put({type: 'FETCH_FLEET_SUCCESS', payload: fleet})
    } catch (error) {
        yield put({type: 'FETCH_FLEET_FAILURE', payload: error})
    }
    while (true) {
      const data = yield take(chan)
      yield put({type: 'FETCH_FLEET', payload: data})
    }
    
  } finally {
    chan.close()
  }
}