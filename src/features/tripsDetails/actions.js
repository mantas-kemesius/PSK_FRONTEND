import {
  authPost,
  authGet,
  authPut,
  authDelete,
  PATHS
} from "./../../utils/axios";
import { SET_TRIPS } from "./constants";
import { push } from "connected-react-router";
import { toggleTripsDetailsForm } from "../../features/trips/actions";
import { getApartamentIdByOfficeId } from "../officeApartaments/selectors";
import { setNotAvailableDates } from "../apartamentsAvailabilities/actions";
import { setEmployeesNotAvailableDates } from "../availabilities/actions";

export const fetchTripsDetails = () => dispatch => {
  authGet(PATHS.TRIP_DETAILS).then(res => {
    dispatch(normaliseAndSave(res.data));
  });
};

export const approveTrip = ({ tripDetailsId, startDate, endDate }) => (
  dispatch,
  getState
) => {
  dispatch(
    setEmployeesNotAvailableDates(startDate, endDate, [getState().user.uuid])
  );
  authPut(PATHS.TRIP_DETAILS_UPDATE, {
    ...getState().tripDetails.byId[tripDetailsId],
    approved: true
  }).then(res => {
    dispatch(triggerSearch());
  });
};

export const checkTripsForStatusUpdate = tripDetailsId => (
  dispatch,
  getState
) => {
  const tripDetails = getState().tripDetails.byId[tripDetailsId];
  const tripId = tripDetails.trip.uuid;
  const { relatedTripIds } = getState().tripDetails;
  const ids = Object.keys(relatedTripIds).filter(
    id => relatedTripIds[id] === tripId
  );
  const details = ids.filter(
    id => getState().tripDetails.byId[id].approved === false
  );
  if (details.length <= 1) {
    authPost(`/api/trip/${tripId}/updateStatus?status=CONFIRMED`).then(res =>
      dispatch(triggerSearch())
    );
  }
};

export const setTripConfirmed = tripId => dispatch => {
  authPost(`/api/trip/${tripId}/updateStatus?status=CONFIRMED`).then(res =>
    dispatch(triggerSearch())
  );
  authDelete(`/api/tripDetails/removeUnapproved/${tripId}`);
};

const triggerSearch = () => ({
  type: "TRIGGER_FETCH"
});

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
  dispatch(triggerSearch());
  dispatch(push("/"));
  dispatch(toggleTripsDetailsForm(false));
};

const generateTripDetailsPostData = ({
  carNeeded,
  ticketNeeded,
  apartament,
  hotelNeeded,
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
    const ap = !hotelNeeded ? { officeApartment: { uuid: apartamentId } } : {};
    return {
      trip: {
        uuid: tripId
      },
      appUser: {
        uuid: item
      },
      ticketNeeded,
      carNeeded,
      hotelNeeded,
      ...ap
    };
  });
  return postData;
};

export const save = payload => ({
  type: SET_TRIPS,
  payload
});
