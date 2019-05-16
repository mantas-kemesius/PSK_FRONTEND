import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import breakpoints from "./../features/breakpoints/reducer";
import user from "./../features/user/reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    breakpoints,
    user
  });
