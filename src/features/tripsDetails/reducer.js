import { SET_TRIPS, TOGGLE_MODAL, SET_ACTIVE_TRIP_ID } from "./constants";

const defaultState = {
  relatedTripIds: {},
  relatedUserIds: {},
  ids: [],
  byId: {},
  activeTripId: "",
  isModalOpen: false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TRIPS:
      return {
        ...state,
        byId: { ...action.payload.byId },
        ids: { ...action.payload.ids },
        relatedTripIds: { ...action.payload.relatedTripIds },
        relatedUserIds: { ...action.payload.relatedUserIds }
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: action.payload
      };
    case SET_ACTIVE_TRIP_ID:
      return {
        ...state,
        activeTripId: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
