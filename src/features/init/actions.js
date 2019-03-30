import { initBreakpoints } from "../breakpoints/actions";

export const initialize = () => (dispatch, getState) => {
  dispatch(initBreakpoints());
};
