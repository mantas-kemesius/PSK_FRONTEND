import {
  authGet,
  basicPost,
  authPut,
  authPost,
  PATHS
} from "./../../utils/axios";
import { SET_AUTH, SET_DETAILS, SIGNOUT } from "./constants";
import { push } from "connected-react-router";
import { fetchTrips } from "./../../features/trips/actions";
import { fetchAvailabilities } from "./../../features/availabilities/actions";
import { fetchOfficeApartaments } from "./../../features/officeApartaments/actions";
import { fetchOffices } from "./../../features/offices/actions";
import { initialize } from "./../../store/initialize";

export const register = data => dispatch => {
  authPut(PATHS.REGISTER, { ...data, office: null }).then(res => {
    dispatch(push("/"));
  });
};

export const changePassword = data => (dispatch, getState) => {
  authPost(
    `${PATHS.CHANGE_PASSWORD}?oldPassword=${data.oldPassword}&newPassword=${
      data.newPassword
    }`,
    getState().user
  ).then(res => {
    dispatch(push("/"));
  });
};

export const authenticate = (data, username) => dispatch => {
  basicPost(data, PATHS.AUTH).then(res => {
    localStorage.setItem("jwt", res.data);
    localStorage.setItem("user", JSON.stringify({ username: username }));
    dispatch(setAuth(username));
    dispatch(triggerFetch());
    dispatch(push("/"));
  });
};

export const fetchUserDetails = () => (dispatch, getState) => {
  authGet(PATHS.USER_GET + `/${getState().user.username}`).then(res => {
    dispatch(setUserDetails(res.data));
    localStorage.setItem("uuid", res.data.uuid);
  });
};

export const signoutAndRemoveUser = () => dispatch => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
  dispatch(signout());
  dispatch(push("/"));
};

const triggerFetch = () => dispatch => {
  initialize({ dispatch });
};

export const setUserDetails = payload => ({
  type: SET_DETAILS,
  payload
});

export const setAuth = username => ({
  type: SET_AUTH,
  payload: { username }
});
export const signout = () => ({
  type: SIGNOUT
});
