import { SET_BREAKPOINT, SET_ORIENTATION } from './constants';

const defaultState = {};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_BREAKPOINT:
            return {
                ...state,
                ...action.data
            };
        case SET_ORIENTATION:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

export default reducer;
