import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './app/reducers/app-reducer';
import SelectedLetterReducer from './alphabet/reducers/selected-letter-reducer';
import SelectedImageReducer from './alphabet/reducers/selected-image-reducer';

const rootReducer = combineReducers({
    pageIndex: AppReducer,
    selectedLetterIndex: SelectedLetterReducer,
    selectedLetterImageIndex: SelectedImageReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;