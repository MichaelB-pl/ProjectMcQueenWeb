import { mainMenuCreator, setPageIndexCreator } from './app-actions-creator';
import { setDefaultIndex } from '../../alphabet/actions/alphabet-actions';
import { savePageIndex } from '../services/session-service';

export function mainMenu() {
    return dispatch => {
        savePageIndex(0);
        dispatch(mainMenuCreator());
    };
}

export function setPageIndex(index) {
    return dispatch => {
        savePageIndex(index);
        dispatch(setPageIndexCreator(index));
    };
}

export function getAllPagesWithoutMenuPage() {
    return [
        {
            name: 'Alfabet',
            prepare: setDefaultIndex,
            index: 1
        }
    ];
}