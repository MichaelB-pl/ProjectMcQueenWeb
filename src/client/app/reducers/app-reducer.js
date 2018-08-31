export const Actions = {
    MAIN_MENU: Symbol('main-menu'),
    SET_PAGE_INDEX: Symbol('set-page-index')
};

export const DEFAULT_STATE = 0;

export default function AppReducer(state = DEFAULT_STATE, { type, index }) {
    switch (type) {
        case Actions.MAIN_MENU:
            return DEFAULT_STATE;
        case Actions.SET_PAGE_INDEX:
            return index;
        default:
            return state;
    }
}