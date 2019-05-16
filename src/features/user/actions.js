import { basicPost, PATHS } from "./../../utils/axios";
import { SET_AUTH, SIGNOUT } from "./constants";
import { push } from "connected-react-router";

export const authenticate = (data, username) => dispatch => {
  basicPost(data, PATHS.AUTH).then(res => {
    localStorage.setItem("jwt", res.data);
    localStorage.setItem("user", JSON.stringify({ username: username }));
    dispatch(setAuth(username));
    dispatch(push("/"));
  });
};

export const signoutAndRemoveUser = () => dispatch => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
  dispatch(signout());
  dispatch(push("/"));
};

export const setAuth = username => ({
  type: SET_AUTH,
  payload: { username }
});
export const signout = () => ({
  type: SIGNOUT
});
