import { authPost, authPut, PATHS } from "./../../utils/axios";
import {
  SET_OFFICE_APARTAMENTS_AVAILABILIETS,
  SET_UNAVAILABLE_DATES
} from "./constants";
import { getApartamentIdByOfficeId } from "./../../features/officeApartaments/selectors";

export const fetchApartamentsAvailabilities = () => dispatch => {
  authPost(PATHS.APARTAMENT_AVAILABILITY).then(res =>
    dispatch(normaliseAndSave(res.data))
  );
};

export const setNotAvailableDates = (
  unavailableFrom,
  unavailableTo,
  officeId
) => (dispatch, getState) => {
  const officeApartamentId = getApartamentIdByOfficeId(getState(), officeId);
  const postData = {
    unavailableFrom,
    unavailableTo,
    officeApartment: {
      uuid: officeApartamentId
    }
  };
  authPut(PATHS.APARTAMENT_AVAILABILITY, postData);
};

const normaliseAndSave = data => dispatch => {
  let ids = [];
  let byId = {};
  let relatedApartamentsIds = {};
  data.forEach(item => {
    byId = {
      ...byId,
      [item.uuid]: {
        ...item
      }
    };
    ids.push(item.uuid);
    relatedApartamentsIds = {
      ...relatedApartamentsIds,
      [item.uuid]: item.officeApartment.uuid
    };
  });
  dispatch(save({ ids, byId, relatedApartamentsIds }));
};

export const save = payload => ({
  type: SET_OFFICE_APARTAMENTS_AVAILABILIETS,
  payload
});

export const setUnavailableDates = payload => ({
  type: SET_UNAVAILABLE_DATES,
  payload
});
