import { authPost, authGet, PATHS } from "./../../utils/axios";
import { SET_TRIPS } from "./constants";
import { push } from "connected-react-router";
import { toggleTripsDetailsForm } from "../../features/trips/actions";

export const fetchTripsDetails = ids => dispatch => {
  authGet(PATHS.TRIP_DETAILS).then(res => {
    dispatch(normaliseAndSave(res.data));
  });
};

const normaliseAndSave = data => dispatch => {
  let ids = [];
  let byId = {};
  let relatedTripIds = {};
  data.forEach(item => {
    const { trip, ...rest } = item;
    byId = {
      ...byId,
      [item.uuid]: {
        ...rest
      }
    };
    ids.push(item.uuid);
    relatedTripIds = {
      ...relatedTripIds,
      [item.uuid]: trip.uuid
    };
  });

  dispatch(save({ ids, byId, relatedTripIds }));
};

export const addTripDetails = data => (dispatch, getState) => {
  const postData = dispatch(generateTripDetailsPostData(data));
  authPost(PATHS.TRIP_DETAILS_CREATE, postData);
  dispatch(push("/"));
  dispatch(toggleTripsDetailsForm(false));
};

const generateTripDetailsPostData = ({
  car,
  ticket,
  apartament,
  hotel,
  employeeIds
}) => (dispatch, getState) => {
  const tripId = getState().trips.additionalTripId;
  const postData = employeeIds.map(item => {
    const ap = {};
    return {
      trip: {
        uuid: tripId
      },
      appUser: {
        uuid: item
      },
      ticket,
      car,
      hotel
      // officeApartment: ap
    };
  });
  return postData;
};

export const save = payload => ({
  type: SET_TRIPS,
  payload
});
