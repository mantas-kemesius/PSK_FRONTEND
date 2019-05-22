import { SET_TRIPS, TOGGLE_MODAL } from "./constants";

const defaultState = {
  isModalOpen: false,
  ids: [],
  byId: {}
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TRIPS:
      return {
        ...action.payload
      };
    case TOGGLE_MODAL:
      return {
        isModalOpen: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
