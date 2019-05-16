import { SET_AUTH, SIGNOUT } from "./constants";

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuth: true
      };
    case SIGNOUT:
      return {
        ...state,
        isAuth: false
      };
    default:
      return state;
  }
};

export default reducer;
