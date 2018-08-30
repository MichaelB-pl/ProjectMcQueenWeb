import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './app/reducers/app-reducer';
import AlphabetReducer from './alphabet/reducers/alphabet-reducer';

const rootReducer = combineReducers({
    page: AppReducer,
    alphabet: AlphabetReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;