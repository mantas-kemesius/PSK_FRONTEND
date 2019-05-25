import {
  SET_OFFICE_APARTAMENTS_AVAILABILIETS,
  SET_UNAVAILABLE_DATES
} from "./constants";

const defaultState = {
  ids: [],
  byId: {},
  relatedApartamentsIds: {}
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_OFFICE_APARTAMENTS_AVAILABILIETS:
      return {
        ...action.payload
      };
    case SET_UNAVAILABLE_DATES:
      return {
        ...state,
        dates: { ...action.payload }
      };
    default:
      return state;
  }
};

export default reducer;
