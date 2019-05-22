import { SET_OFFICES } from "./constants";

const defaultState = {
  ids: [],
  byId: {}
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_OFFICES:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
