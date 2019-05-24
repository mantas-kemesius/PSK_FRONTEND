import { SET_OFFICES, SET_SELECTED_OFFICE } from "./constants";

const defaultState = {
  ids: [],
  byId: {},
  selectedTripStartId: ""
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_OFFICES:
      return {
        ...action.payload
      };
    case SET_SELECTED_OFFICE:
      return {
        ...state,
        selectedTripStartId: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
