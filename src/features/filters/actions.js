import { SET_FILTER } from "./constants";

export const setFilterValue = payload => dispatch => {
  dispatch(set(payload));
};

export const set = payload => ({
  type: SET_FILTER,
  payload
});
