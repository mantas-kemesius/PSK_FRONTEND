import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

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

export default history =>
  combineReducers({
    router: connectRouter(history),
    something: red
  });
