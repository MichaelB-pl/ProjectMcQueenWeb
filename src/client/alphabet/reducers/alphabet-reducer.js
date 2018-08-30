export const Actions = {
    SET_INDEX: Symbol('set-index'),
    SET_DEFAULT_INDEX: Symbol('set-default-index')
};

const DEFAULT_STATE = 0;

export default function AlphabetReducer(state = DEFAULT_STATE, { type, index }) {
    switch (type) {
        case Actions.SET_INDEX:
            return index;
        case Actions.SET_DEFAULT_INDEX:
            return DEFAULT_STATE;
        default:
            return state;
    }
}