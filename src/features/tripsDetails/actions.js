import { authPost, authGet, PATHS } from "./../../utils/axios";
import { SET_TRIPS } from "./constants";
import { push } from "connected-react-router";
import { toggleTripsDetailsForm } from "../../features/trips/actions";
import { getApartamentIdByOfficeId } from "../officeApartaments/selectors";
import { setNotAvailableDates } from "../apartamentsAvailabilities/actions";
import { setEmployeesNotAvailableDates } from "../availabilities/actions";

export const fetchTripsDetails = ids => dispatch => {
  authGet(PATHS.TRIP_DETAILS).then(res => {
    dispatch(normaliseAndSave(res.data));
  });
};

export const approveTrip = tripDetailsId => (dispatch, getState) => {
  console.log(tripDetailsId);
};

const normaliseAndSave = data => dispatch => {
  let ids = [];
  let byId = {};
  let relatedTripIds = {};
  let relatedUserIds = {};
  data.forEach(item => {
    byId = {
      ...byId,
      [item.uuid]: {
        ...item
      }
    };
    ids.push(item.uuid);
    relatedTripIds = {
      ...relatedTripIds,
      [item.uuid]: item.trip.uuid
    };
    relatedUserIds = {
      ...relatedUserIds,
      [item.uuid]: item.appUser.uuid
    };
  });

  dispatch(save({ ids, byId, relatedTripIds, relatedUserIds }));
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
  const tripId = getState().trips.shouldConnect
    ? getState().trips.additionalTripId
    : getState().trips.tripId;
  const apartamentId = getApartamentIdByOfficeId(
    getState(),
    getState().offices.destinationOfficeId
  );
  if (apartament) {
    dispatch(
      setNotAvailableDates(
        getState().apartamentsAvailabilities.dates.from,
        getState().apartamentsAvailabilities.dates.till,
        getState().offices.destinationOfficeId
      )
    );
  }

  const postData = employeeIds.map(item => {
    const ap = apartament ? { officeApartment: { uuid: apartamentId } } : {};
    return {
      trip: {
        uuid: tripId
      },
      appUser: {
        uuid: item
      },
      ticket,
      car,
      hotel,
      ...ap
    };
  });
  return postData;
};

export const save = payload => ({
  type: SET_TRIPS,
  payload
});
