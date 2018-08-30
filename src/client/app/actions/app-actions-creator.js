import { Actions } from '../reducers/app-reducer';

export function menuPageCreator() {
    return {
        type: Actions.MENU_PAGE
    };
}

export function alphabetPageCreator() {
    return {
        type: Actions.ALPHABET_PAGE
    };
}