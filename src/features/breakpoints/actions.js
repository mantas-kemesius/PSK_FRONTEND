import { SET_BREAKPOINT, SET_ORIENTATION, breakpoints } from "./constants";
import { MatchMediaBreakpoint } from "match-media-breakpoint";
import {
  isMobileWidth,
  isTabletWidth,
  isLaptopWidth,
  isDesktopWidth
} from "./selectors";

const getTemplate = type => ({
  mobile: type === "mobile",
  tablet: type === "tablet",
  laptop: type === "laptop",
  desktop: type === "desktop"
});

export const triggerOrientation = currentOrientation => {
  return dispatch => {
    const orientation =
      window.screen.msOrientation ||
      window.screen.mozOrientation ||
      (window.screen.orientation || {}).type;
    let data = { landscape: false, portrait: false };
    if (orientation === "landscape-primary") {
      data.landscape = true;
    } else if (orientation === "landscape-secondary") {
      data.landscape = true;
    } else if (
      orientation === "portrait-secondary" ||
      orientation === "portrait-primary"
    ) {
      data.portrait = true;
    }
    dispatch(setOrientation(data));
  };
};

export const initBreakpoints = () => {
  return dispatch => {
    window.addEventListener("orientationchange", function() {
      dispatch(triggerOrientation());
    });
    const matchMediaBreakpoint = new MatchMediaBreakpoint({
      breakpoints,
      onBreakpointChange: (currentBreakpoint, previousBreakpoint) => {
        dispatch(triggerBreakpoint(currentBreakpoint));
      }
    });
    dispatch(triggerOrientation());
    dispatch(triggerBreakpoint(matchMediaBreakpoint.value));
  };
};

const isValidToSave = (state, breakpoints) =>
  !(
    isMobileWidth(state) === breakpoints.mobile &&
    isTabletWidth(state) === breakpoints.tablet &&
    isLaptopWidth(state) === breakpoints.laptop &&
    isDesktopWidth(state) === breakpoints.desktop
  );

export const triggerBreakpoint = currentBr => {
  return (dispatch, getState) => {
    const template = getTemplate(currentBr);
    if (!!currentBr && isValidToSave(getState(), template)) {
      dispatch(setBreakpoint({ ...template }));
      localStorage.setItem(
        "app",
        JSON.stringify({ breakpoints: getState().breakpoints })
      );
    }
  };
};

export const setOrientation = payload => ({
  type: SET_ORIENTATION,
  data: { orientation: payload }
});

export const setBreakpoint = payload => ({
  type: SET_BREAKPOINT,
  data: { width: payload }
});
