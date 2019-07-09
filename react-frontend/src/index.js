import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './containers/common/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/index';

const store = createStore(reducer)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();
