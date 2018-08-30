import { Actions } from '../reducers/alphabet-reducer';

export function setIndexCreator(index) {
    return {
        type: Actions.SET_INDEX,
        index
    };
}

export function setDefaultIndexCreator() {
    return {
        type: Actions.SET_DEFAULT_INDEX
    };
}