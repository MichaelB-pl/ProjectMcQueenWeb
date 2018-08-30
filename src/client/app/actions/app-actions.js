import { menuPageCreator, alphabetPageCreator } from './app-actions-creator';
import { Actions } from '../reducers/app-reducer';
import { setDefaultIndex } from '../../alphabet/actions/alphabet-actions';

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
    // const list = [
    //     { name: 'Alfabet', action: Actions.ALPHABET_PAGE }
    // ];
    // let newList = [];
    // while (newList.length < 30) {
    //     newList = [...newList, ...list];
    // }
    // return newList;
    return [
        {
            name: 'Alfabet',
            action: () => {
                setDefaultIndex();
                return Actions.ALPHABET_PAGE;
            }
        }
    ];
}