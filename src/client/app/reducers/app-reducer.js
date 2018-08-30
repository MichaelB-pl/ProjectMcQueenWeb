export const Actions = {
    MAIN_PAGE: Symbol('main-page'),
    ALPHABET_PAGE: Symbol('alphabet-page')
};

const DEFAULT_STATE = Actions.MAIN_PAGE;

export default function AppReducer(state = DEFAULT_STATE, { type }) {
    switch (type) {
        case Actions.MAIN_PAGE:
        case Actions.ALPHABET_PAGE:
            return type;
        default:
            return state;
    }
}