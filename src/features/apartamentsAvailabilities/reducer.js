import { SET_OFFICE_APARTAMENTS_AVAILABILIETS } from "./constants";

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
    default:
      return state;
  }
};

export default reducer;
