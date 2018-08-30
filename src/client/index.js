import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/app';
import store from './store';

import { getLastPageIndex } from './app/services/session-service';
import { setPageIndexCreator } from './app/actions/app-actions-creator';

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}

function loadPageIndex() {
    getLastPageIndex().then(index => {
        store.dispatch(setPageIndexCreator(index));
        render();
    });
}

(loadPageIndex());