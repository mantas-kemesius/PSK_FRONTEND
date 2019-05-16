import { SET_TRIPS } from "./constants";

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TRIPS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
