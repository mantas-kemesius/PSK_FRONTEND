import { authPost, authPut, PATHS } from "./../../utils/axios";
import { SET_TRIPS, TOGGLE_MODAL } from "./constants";
import { push } from "connected-react-router";

export const fetchTrips = () => dispatch => {
  authPost(PATHS.TRIP).then(res => {
    dispatch(normaliseAndSave(res.data));
  });
};

export const connectTrips = (connect, data) => (dispatch, getState) => {
  const postData = {
    office: {
      uuid: data.officeId
    },
    coordinator: {
      uuid: data.coordinatorId
    },
    status: data.status,
    departureDate: data.departureDate.toISOString(),
    returnDate: data.returnDate.toISOString(),
    destination: data.destination
  };
  authPut(PATHS.TRIP + `/${connect}`, postData);
  dispatch(toggleModal(false));
  dispatch(push("/"));
};

export const addTrip = data => (dispatch, getState) => {
  const postData = {
    office: {
      uuid: data.officeId
    },
    coordinator: {
      uuid: data.coordinatorId
    },
    status: data.status,
    departureDate: data.departureDate.toISOString(),
    returnDate: data.returnDate.toISOString(),
    destination: data.destination
  };
  dispatch(askOrTripShouldBeConnected(postData));
};

export const askOrTripShouldBeConnected = data => (dispatch, getState) => {
  authPut(PATHS.TRIP_SHOULD_CONNECT, data).then(res => {
    if (res.data) {
      dispatch(toggleModal(true));
    } else {
      authPut(PATHS.TRIP + `/false`, data);
      dispatch(push("/"));
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
};

export const toggleModal = val => ({
  type: TOGGLE_MODAL,
  payload: val
});

export const save = payload => ({
  type: SET_TRIPS,
  payload
});
