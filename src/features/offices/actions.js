import { authPost, authPut, PATHS } from "./../../utils/axios";
import { SET_OFFICES, SET_SELECTED_OFFICE } from "./constants";
import { push } from "connected-react-router";

export const addNewOffice = data => dispatch => {
  const { apartamentStreetAddress, ...rest } = data;
  authPut(PATHS.OFFICE_ADD, rest).then(res => {
    dispatch(fetchOffices());
    dispatch(push("/"));
    dispatch(addApartaments(res.data, apartamentStreetAddress));
  });
};

export const addApartaments = (office, streetAddress) => (
  dispatch,
  getState
) => {
  const postData = {
    office: {
      uuid: office.uuid
    },
    streetAddress
  };
  authPut(PATHS.OFFICE_APARTAMENTS, [postData]);
};

export const removeOffice = data => () => {
  authPut(PATHS.OFFICE_ADD, data).then(res => console.log(res));
};

export const fetchOffices = () => dispatch => {
  authPost(PATHS.OFFICE).then(res => dispatch(normaliseAndSave(res.data)));
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

export const save = payload => ({
  type: SET_OFFICES,
  payload
});

export const setSelectedOffice = payload => ({
  type: SET_SELECTED_OFFICE,
  payload
});
