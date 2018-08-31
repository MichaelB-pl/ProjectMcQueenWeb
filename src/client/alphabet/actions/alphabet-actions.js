import {
    setLetterIndexCreator,
    setDefaultLetterIndexCreator,
    setImageIndexCreator,
    setDefaultImageIndexCreator
} from './alphabet-actions-creator';
import {
    saveLastLetterIndex,
    saveLastImageIndex
} from '../services/alphabet-services';
import { DEFAULT_STATE as LETTER_DEFAULT_STATE } from '../reducers/selected-letter-reducer';
import { DEFAULT_STATE as IMAGE_DEFAULT_STATE } from '../reducers/selected-image-reducer';

export function setLetterIndex(index) {
    saveLastLetterIndex(index);
    return dispatch => dispatch(setLetterIndexCreator(index));
}

export function setDefaultLetterIndex() {
    saveLastLetterIndex(LETTER_DEFAULT_STATE);
    return dispatch => dispatch(setDefaultLetterIndexCreator());
}


export function setImageIndex(index) {
    saveLastImageIndex(index);
    return dispatch => dispatch(setImageIndexCreator(index));
}

export function setDefaultImageIndex() {
    saveLastImageIndex(IMAGE_DEFAULT_STATE);
    return dispatch => dispatch(setDefaultImageIndexCreator());
}