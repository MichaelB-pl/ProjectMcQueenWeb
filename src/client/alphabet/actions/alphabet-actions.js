import {
    setLetterIndexCreator,
    setDefaultLetterIndexCreator,
    setImageIndexCreator,
    setDefaultImageIndexCreator
} from './alphabet-actions-creator';

//ToDo: Save States;

export function setLetterIndex(index) {
    return dispatch => dispatch(setLetterIndexCreator(index));
}

export function setDefaultLetterIndex() {
    return dispatch => dispatch(setDefaultLetterIndexCreator());
}


export function setImageIndex(index) {
    return dispatch => dispatch(setImageIndexCreator(index));
}

export function setDefaultImageIndex() {
    return dispatch => dispatch(setDefaultImageIndexCreator());
}