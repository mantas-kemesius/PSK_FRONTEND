import { initBreakpoints } from "../features/breakpoints/actions";
import { isAuth } from "./../features/user/selectors";
import { setAuth } from "./../features/user/actions";

export const initialize = ({ dispatch }) => {
  dispatch(initBreakpoints());
  if (isAuth()) {
    dispatch(setAuth());
  }
};
