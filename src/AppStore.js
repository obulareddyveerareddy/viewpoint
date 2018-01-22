import {createStore, applyMiddleware}   from 'redux';
import thunk                            from 'redux-thunk';
import rootReducers                     from './AppReducers';
import createSagaMiddleware             from 'redux-saga';
import {initSagas}                      from './initSagas';

export default function configureStore(initialState){
    const sagaMiddleware = createSagaMiddleware()
    const store          = createStore(
        rootReducers,
        initialState,
        applyMiddleware(sagaMiddleware)
    );
    console.log("Saga middleware implemented.");
    initSagas(sagaMiddleware);
    return store;
}
