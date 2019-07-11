import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
}from 'redux';

import thunk from 'redux-thunk';

import logger from 'redux-logger';
//외부라이브러리 쓸 거면 connected-react-router 쓰자
import {connectRouter, routerMiddleware} from 'connected-react-router'
import * as reducers from './reducers';

export default function createStore(history){
    return reduxCreateStore(
        combineReducers({
            ...reducers,
            router: connectRouter(history)
        }),
        applyMiddleware(
            logger,
            thunk,
            routerMiddleware(history)
        )
    )
}