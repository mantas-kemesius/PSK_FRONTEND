import { SET_FILTER, SET_TRIP_FILTER } from "./constants";

const defaultState = {
  activeFilter: "ALL",
  activeTripFilter: "ALL"
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        activeFilter: action.payload
      };
    case SET_TRIP_FILTER:
      return {
        ...state,
        activeTripFilter: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
