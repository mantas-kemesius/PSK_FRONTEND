import { FETCH } from "./constants";

const defaultState = {
  byId: {},
  ids: []
};

const reducer = (state = defaultState, { payload, type }) => {
  switch (type) {
    case FETCH:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default reducer;
