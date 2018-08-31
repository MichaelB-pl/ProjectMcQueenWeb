import { Actions as LetterActions } from '../reducers/selected-letter-reducer';
import { Actions as ImageActions } from '../reducers/selected-image-reducer';

export function setLetterIndexCreator(index) {
    return {
        type: LetterActions.SET_INDEX,
        index
    };
}

export function setDefaultLetterIndexCreator() {
    return {
        type: LetterActions.SET_DEFAULT_INDEX
    };
}


export function setImageIndexCreator(index) {
    return {
        type: ImageActions.SET_INDEX,
        index
    };
}

export function setDefaultImageIndexCreator() {
    return {
        type: ImageActions.SET_DEFAULT_INDEX
    };
}