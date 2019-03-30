import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createRootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { initialize } from "./initialize";

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );
  initialize(store);

  return store;
}
