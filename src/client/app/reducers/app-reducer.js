export const Actions = {
    MENU_PAGE: Symbol('menu-page'),
    ALPHABET_PAGE: Symbol('alphabet-page')
};

const DEFAULT_STATE = Actions.MENU_PAGE;

export default function AppReducer(state = DEFAULT_STATE, { type }) {
    switch (type) {
        case Actions.MENU_PAGE:
        case Actions.ALPHABET_PAGE:
            return type;
        default:
            return state;
    }
}