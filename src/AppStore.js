import {createStore, applyMiddleware} from 'redux';
import thunk                          from 'redux-thunk';
import rootReducers                   from './AppReducers';

export default function configureStore(initialState){
    return createStore(
        rootReducers,
        initialState,
        applyMiddleware(thunk)
    );
}
