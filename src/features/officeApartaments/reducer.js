import { SET_OFFICE_APARTAMENTS } from "./constants";

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_OFFICE_APARTAMENTS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
