import { SET_AUTH, SIGNOUT } from "./constants";

const defaultState = {};

const reducer = (state = defaultState, { payload, type }) => {
  switch (type) {
    case SET_AUTH:
      return {
        ...state,
        ...payload,
        isAuth: true
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
