import { SET_AVAILABILITIES } from "./constants";

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_AVAILABILITIES:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
