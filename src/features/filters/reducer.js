import { SET_FILTER } from "./constants";

const defaultState = {
  activeFilter: "ALL"
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        activeFilter: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
