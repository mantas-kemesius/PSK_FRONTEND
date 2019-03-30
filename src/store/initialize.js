import { initBreakpoints } from "../features/breakpoints/actions";

export const initialize = ({ dispatch }) => {
  dispatch(initBreakpoints());
};
