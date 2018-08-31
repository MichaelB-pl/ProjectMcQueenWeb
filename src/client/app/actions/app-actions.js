import { mainMenuCreator, setPageIndexCreator } from './app-actions-creator';
import { setDefaultLetterIndex, setDefaultImageIndex } from '../../alphabet/actions/alphabet-actions';
import { savePageIndex } from '../services/session-service';
import { DEFAULT_STATE as PAGE_DEFAULT_STATE } from '../reducers/app-reducer';

export function mainMenu() {
    return dispatch => {
        savePageIndex(PAGE_DEFAULT_STATE);
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
            prepare: () => {
                setDefaultLetterIndex();
                setDefaultImageIndex();
            },
            index: 1
        }
    ];
}