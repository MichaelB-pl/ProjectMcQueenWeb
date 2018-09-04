import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/app';
import store from './store';

import { getLastPageIndex } from './app/services/session-service';
import { setPageIndexCreator } from './app/actions/app-actions-creator';
import { getLastLetterIndex, getLastImageIndex } from './alphabet/services/alphabet-services';
import { setLetterIndexCreator, setImageIndexCreator } from './alphabet/actions/alphabet-actions-creator';

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}

const promises = [
    getLastPageIndex(),
    getLastLetterIndex(),
    getLastImageIndex(),
];

const creators = [
    setPageIndexCreator,
    setLetterIndexCreator,
    setImageIndexCreator
];

function loadSessionInfo() {
    Promise.all(promises).then(indexes => {
        for (let j = 0; j < indexes.length; j++) {
            store.dispatch(creators[j](indexes[j]));
        }
        render();
    });
}

(loadSessionInfo());