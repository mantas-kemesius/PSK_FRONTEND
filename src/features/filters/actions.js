import { SET_FILTER, SET_TRIP_FILTER } from "./constants";

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
