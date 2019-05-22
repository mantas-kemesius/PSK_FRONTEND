import axios from "axios";
import { getJWToken } from "./../features/user/selectors";

const URL = "http://localhost:8080";
export const PATHS = {
  AUTH: "/api/login",
  TRIP: "/api/trip",
  AVAILABILITY: "/api/availability",
  OFFICE_APARTAMENTS: "/api/officeApartment",
  OFFICE: "/api/office",
  OFFICE_ADD: "/api/office/add",
  USER_GET: "/api/user"
};

const basicHeaders = path => {
  return {
    headers: { "content-type": "application/json" },
    url: `${URL}${path}`
    // withCredentials: true
  };
};

const authHeaders = path => {
  return {
    headers: {
      Authorization: `${getJWToken()}`,
      "Content-Type": "application/json"
    },
    url: `${URL}${path}`
    // withCredentials: true
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

export const authPost = (url, data = {}) => {
  return axios({
    method: "POST",
    ...authHeaders(url),
    data: data
  });
};

export const authPut = (url, data = {}) => {
  return axios({
    method: "PUT",
    ...authHeaders(url),
    data: data
  });
};

export const authGet = url => {
  return axios({
    method: "GET",
    ...authHeaders(url)
  });
};
