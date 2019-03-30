export const isMobileWidth = state =>
    !!state.breakpoints && !!state.breakpoints.width && !!state.breakpoints.width.mobile;
export const isTabletWidth = state =>
    !!state.breakpoints && !!state.breakpoints.width && !!state.breakpoints.width.tablet;
export const isLaptopWidth = state =>
    !!state.breakpoints && !!state.breakpoints.width && !!state.breakpoints.width.laptop;
export const isDesktopWidth = state =>
    !!state.breakpoints && !!state.breakpoints.width && !!state.breakpoints.width.desktop;
export const isLandscape = state =>
    !!state.breakpoints && !!state.breakpoints.state.orientation && !!state.breakpoints.orientation.landscape;
export const isPortrait = state =>
    !!state.breakpoints && !!state.breakpoints.state.orientation && !!state.breakpoints.orientation.portrait;
