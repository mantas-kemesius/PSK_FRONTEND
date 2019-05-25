import { fetchData } from "./initialize";
export const fetchMiddleware = store => next => action => {
  if (action.type === "TRIGGER_FETCH") {
    store.dispatch(fetchData());
  }
  next(action);
};
