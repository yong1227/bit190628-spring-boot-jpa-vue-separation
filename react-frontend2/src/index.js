import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import {createStore, combineReducers, applyMiddleware} from 'redux';
//import logger from 'redux-logger';
//reducers를 따로 쓴다는 것은 duck 패턴을 쓰지 않는다는 뜻
// import * as reducers from './reducers'
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './createStore'

const history = createBrowserHistory();

const store = createStore(history);

ReactDOM.render(
    <Provider store = {store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
