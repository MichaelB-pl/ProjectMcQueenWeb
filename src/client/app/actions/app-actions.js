import { menuPageCreator, alphabetPageCreator } from './app-actions-creator';
import { Actions } from '../reducers/app-reducer';

export function goToPage(page) {
    return dispatch => {
        switch (page) {
            case Actions.MENU_PAGE:
                dispatch(menuPageCreator());
            case Actions.ALPHABET_PAGE:
                dispatch(alphabetPageCreator());
            default:
                break;
        }
    }
}

export function getAllPagesWithoutMenuPage() {
    const list = [
        { name: 'Alfabet', action: Actions.ALPHABET_PAGE }
    ];
    let newList = [];
    for (let i = 0; i < 100; i++) {
        newList = [...newList, list];
    }
    return newList;
    // return [
    //     { name: 'Alfabet', action: Actions.ALPHABET_PAGE }
    // ];
}