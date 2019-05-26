import { SET_FILTER, SET_TRIP_FILTER, SET_YEARS } from "./constants";

const defaultState = {
  activeFilter: "ALL",
  activeTripFilter: "ALL",
  years: "2019"
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
    case SET_YEARS:
      return {
        ...state,
        years: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
