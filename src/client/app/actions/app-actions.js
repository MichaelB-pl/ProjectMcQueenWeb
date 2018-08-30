import { mainPageCreator, alphabetPageCreator } from './app-actions-creator';
import { Actions } from '../reducers/app-reducer';

export function goToPage(page) {
    return dispatch => {
        switch (page) {
            case Actions.MAIN_PAGE:
                dispatch(mainPageCreator());
            case Actions.ALPHABET_PAGE:
                dispatch(alphabetPageCreator());
            default:
                break;
        }
    }
}

export function getAllPagesWithoutMainPage() {
    return [
        { name: 'Alfabet', action: Actions.ALPHABET_PAGE }
    ];
}