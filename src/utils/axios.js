import axios from "axios";
import { getJWToken } from "./../features/user/selectors";

const URL = "http://localhost:8080";
export const PATHS = {
  AUTH: "/api/login"
};

const basicHeaders = path => {
  return {
    headers: { "content-type": "application/json" },
    url: `${URL}${path}`,
    withCredentials: true
  };
};

const authHeaders = path => {
  return {
    headers: {
      Authorization: `${getJWToken()}`,
      "Content-type": "application/json"
    },
    url: `${URL}${path}`,
    withCredentials: true
  };
};

export const basicPost = (data, url) => {
  return axios({
    method: "POST",
    ...basicHeaders(url),
    data: data
  });
};

export const basicGet = url => {
  return axios({
    method: "GET",
    ...basicHeaders(url)
  });
};

export const authPost = (data, url, token) => {
  return axios({
    method: "POST",
    ...authHeaders(url, token),
    data: { ...data }
  });
};

export const authGet = url => {
  return axios({
    method: "GET",
    ...authHeaders(url)
  });
};
