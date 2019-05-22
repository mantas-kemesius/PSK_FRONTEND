import { SET_TRIPS } from "./constants";

const defaultState = {};
//   ids: [],
//   byId: {}
// };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TRIPS:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
