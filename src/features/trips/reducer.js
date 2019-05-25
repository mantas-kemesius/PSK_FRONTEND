import {
  SET_TRIPS,
  TOGGLE_MODAL,
  TOGGLE_TRIP_DETAILS_FORM,
  SHOULD_BE_CONNECTED,
  TOGGLE_APARTAMENT_CHECKBOX,
  SHOULD_CONNECT,
  SET_TRIP_ID
} from "./constants";

const defaultState = {
  isModalOpen: false,
  ids: [],
  byId: {},
  isApartamentCheckboxChecked: false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TRIPS:
      return {
        ...action.payload
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: action.payload
      };
    case SHOULD_CONNECT:
      return {
        ...state,
        shouldConnect: action.payload
      };
    case SHOULD_BE_CONNECTED:
      return {
        ...state,
        additionalTripId: action.payload
      };
    case SET_TRIP_ID:
      return {
        ...state,
        tripId: action.payload
      };
    case TOGGLE_TRIP_DETAILS_FORM:
      return {
        ...state,
        isFormVisible: action.payload
      };
    case TOGGLE_APARTAMENT_CHECKBOX:
      return {
        ...state,
        isApartamentCheckboxChecked: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
