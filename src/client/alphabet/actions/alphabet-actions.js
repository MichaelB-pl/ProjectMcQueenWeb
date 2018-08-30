import { setIndexCreator, setDefaultIndexCreator } from './alphabet-actions-creator';

export function setIndex(index) {
    return dispatch => dispatch(setIndexCreator(index));
}

export function setDefaultIndex() {
    return dispatch => dispatch(setDefaultIndexCreator());
}