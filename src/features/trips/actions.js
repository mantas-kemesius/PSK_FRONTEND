import { authPost, authPut, PATHS } from "./../../utils/axios";
import {
  SET_TRIPS,
  TOGGLE_MODAL,
  TOGGLE_TRIP_DETAILS_FORM,
  SHOULD_BE_CONNECTED,
  TOGGLE_APARTAMENT_CHECKBOX
} from "./constants";
import { fetchTripsDetails } from "./../../features/tripsDetails/actions";
import { setNotAvailableDates } from "../../features/apartamentsAvailabilities/actions";
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
  authPut(PATHS.TRIP + `/${connect}`, postData);
  dispatch(toggleModal(false));
  dispatch(toggleTripsDetailsForm(true));
  // dispatch(push("/"));
};

export const addTrip = data => (dispatch, getState) => {
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
  dispatch(askOrTripShouldBeConnected(postData));
  dispatch(
    setNotAvailableDates(
      data.departureDate.toISOString(),
      data.returnDate.toISOString(),
      data.destination
    )
  );
};

export const askOrTripShouldBeConnected = data => (dispatch, getState) => {
  authPut(PATHS.TRIP_SHOULD_CONNECT, data).then(res => {
    if (!!res.data) {
      dispatch(toggleModal(true));
      dispatch(tripIdShouldBeConnectedTo(res.data));
    } else {
      authPut(PATHS.TRIP + `/false`, data);
      dispatch(toggleTripsDetailsForm(true));
    }
  });
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

export const toggleApartamentCheckbox = val => ({
  type: TOGGLE_APARTAMENT_CHECKBOX,
  payload: val
});

export const toggleModal = val => ({
  type: TOGGLE_MODAL,
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
