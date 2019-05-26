import { SET_FILTER, SET_TRIP_FILTER, SET_YEARS } from "./constants";

export const setFilterValue = payload => dispatch => {
  dispatch(set(payload));
};

export const set = payload => ({
  type: SET_FILTER,
  payload
});

export const setTripFilter = payload => ({
  type: SET_TRIP_FILTER,
  payload
});

export const setYears = payload => ({
  type: SET_YEARS,
  payload
});
