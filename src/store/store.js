import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createRootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  return createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );
}
