import { SET_AUTH, SIGNOUT, SET_DETAILS } from "./constants";

const defaultState = {};

const reducer = (state = defaultState, { payload, type }) => {
  switch (type) {
    case SET_AUTH:
      return {
        ...state,
        ...payload,
        isAuth: true
      };
    case SET_DETAILS:
      return {
        ...state,
        ...payload
      };
    case SIGNOUT:
      return {
        ...state,
        isAuth: false,
        username: null
      };
    default:
      return state;
  }
};

export default reducer;
