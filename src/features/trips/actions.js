import { authPost, authPut, PATHS } from "./../../utils/axios";
import {
  SET_TRIPS,
  TOGGLE_MODAL,
  TOGGLE_TRIP_DETAILS_FORM,
  SHOULD_BE_CONNECTED,
  TOGGLE_APARTAMENT_CHECKBOX,
  SHOULD_CONNECT,
  SET_TRIP_ID
} from "./constants";
import { fetchTripsDetails } from "./../../features/tripsDetails/actions";
import {
  setNotAvailableDates,
  setUnavailableDates
} from "../../features/apartamentsAvailabilities/actions";
import { push } from "connected-react-router";

export const fetchTrips = () => dispatch => {
  authPost(PATHS.TRIP).then(res => {
    dispatch(normaliseAndSave(res.data));
  });
};

export const connectTrips = (connect, data) => (dispatch, getState) => {
  const postData = {
    departureOffice: {
      uuid: data.officeId
    },
    coordinator: {
      uuid: data.coordinatorId
    },
    status: data.status,
    departureDate: data.departureDate.toISOString(),
    returnDate: data.returnDate.toISOString(),
    destinationOffice: {
      uuid: data.destination
    }
  };

  dispatch(setShouldConnect(connect));
  authPut(PATHS.TRIP + `/${connect}`, postData).then(res =>
    dispatch(setTripId(res.data.uuid))
  );
  dispatch(toggleModal(false));
  dispatch(toggleTripsDetailsForm(true));
};

export const addTrip = data => (dispatch, getState) => {
  const departureDate = data.departureDate.toISOString();
  const returnDate = data.returnDate.toISOString();
  const postData = {
    departureOffice: {
      uuid: data.officeId
    },
    coordinator: {
      uuid: data.coordinatorId
    },
    status: data.status,
    departureDate,
    returnDate,
    destinationOffice: {
      uuid: data.destination
    }
  };
  dispatch(askOrTripShouldBeConnected(postData));
  dispatch(setUnavailableDates({ from: departureDate, till: returnDate }));
  if (getState().trips.isApartamentCheckboxChecked) {
    dispatch(setNotAvailableDates(departureDate, returnDate, data.destination));
  }
};

export const askOrTripShouldBeConnected = data => (dispatch, getState) => {
  if (!getState().trips.isApartamentCheckboxChecked) {
    authPut(PATHS.TRIP_SHOULD_CONNECT, data).then(res => {
      if (!!res.data) {
        dispatch(toggleModal(true));
        dispatch(tripIdShouldBeConnectedTo(res.data));
      } else {
        authPut(PATHS.TRIP + `/false`, data).then(res =>
          dispatch(setTripId(res.data.uuid))
        );
        dispatch(toggleTripsDetailsForm(true));
      }
    });
  } else {
    authPut(PATHS.TRIP + `/false`, data);
    dispatch(toggleTripsDetailsForm(true));
  }
};

const normaliseAndSave = data => dispatch => {
  let ids = [];
  let byId = {};
  data.forEach(item => {
    byId = {
      ...byId,
      [item.uuid]: {
        ...item
      }
    };
    ids.push(item.uuid);
  });

  dispatch(save({ ids, byId }));
  dispatch(fetchTripsDetails(ids));
};

export const setTripId = val => ({
  type: SET_TRIP_ID,
  payload: val
});

export const toggleApartamentCheckbox = val => ({
  type: TOGGLE_APARTAMENT_CHECKBOX,
  payload: val
});

export const toggleModal = val => ({
  type: TOGGLE_MODAL,
  payload: val
});

export const setShouldConnect = val => ({
  type: SHOULD_CONNECT,
  payload: val
});

export const toggleTripsDetailsForm = val => ({
  type: TOGGLE_TRIP_DETAILS_FORM,
  payload: val
});

export const save = payload => ({
  type: SET_TRIPS,
  payload
});

export const tripIdShouldBeConnectedTo = val => ({
  type: SHOULD_BE_CONNECTED,
  payload: val
});
