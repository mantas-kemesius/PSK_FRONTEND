import {
  SET_OFFICES,
  SET_SELECTED_OFFICE,
  SET_DESTINATION_OFFICE
} from "./constants";

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
    case SET_DESTINATION_OFFICE:
      return {
        ...state,
        destinationOfficeId: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
