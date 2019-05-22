import { authGet, basicPost, authPost, PATHS } from "./../../utils/axios";
import { SET_AUTH, SET_DETAILS, SIGNOUT } from "./constants";
import { push } from "connected-react-router";
import { fetchTrips } from "./../../features/trips/actions";
import { fetchAvailabilities } from "./../../features/availabilities/actions";
import { fetchOfficeApartaments } from "./../../features/officeApartaments/actions";
import { fetchOffices } from "./../../features/offices/actions";

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
  dispatch(fetchTrips());
  dispatch(fetchAvailabilities());
  dispatch(fetchOfficeApartaments());
  dispatch(fetchOffices());
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
