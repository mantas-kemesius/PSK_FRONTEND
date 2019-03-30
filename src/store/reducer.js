import { combineReducers } from "redux";

const red = (state = {}, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  something: red
});
