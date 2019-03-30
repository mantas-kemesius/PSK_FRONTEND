import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import breakpoints from "./../features/breakpoints/reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    breakpoints
  });
