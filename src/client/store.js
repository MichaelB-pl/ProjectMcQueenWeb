import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './app/reducers/app-reducer';

const rootReducer = combineReducers({
    page: AppReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;