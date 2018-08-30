import { Actions } from '../reducers/app-reducer';

export function mainPageCreator() {
    return {
        type: Actions.MAIN_PAGE
    };
}

export function alphabetPageCreator() {
    return {
        type: Actions.ALPHABET_PAGE
    };
}