import { Actions } from '../reducers/app-reducer';

export function mainMenuCreator() {
    return {
        type: Actions.MAIN_MENU
    };
}

export function setPageIndexCreator(index) {
    return {
        type: Actions.SET_PAGE_INDEX,
        index
    };
}