import { basicPost, PATHS } from "./../../utils/axios";
import { SET_AUTH, SIGNOUT } from "./constants";
import { push } from "connected-react-router";

export const authenticate = data => dispatch => {
  basicPost(data, PATHS.AUTH).then(res => {
    localStorage.setItem("jwt", res.data);
    dispatch(setAuth());
  });
};

export const signoutAndRemoveUser = () => dispatch => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
  dispatch(signout());
  dispatch(push("/"));
};

export const setAuth = () => ({
  type: SET_AUTH
});
export const signout = () => ({
  type: SIGNOUT
});
