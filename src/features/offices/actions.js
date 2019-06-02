import { authPost, authPut, PATHS } from "./../../utils/axios";
import {
  SET_OFFICES,
  SET_SELECTED_OFFICE,
  SET_DESTINATION_OFFICE
} from "./constants";
import { push } from "connected-react-router";

export const addNewOffice = data => dispatch => {
  const { apartamentStreetAddress, apartmentNumber, ...rest } = data;
  authPut(PATHS.OFFICE_ADD, rest).then(res => {
    dispatch(fetchOffices());
    dispatch(push("/"));
    dispatch(
      addApartaments(res.data.uuid, apartamentStreetAddress, apartmentNumber)
    );
    dispatch(triggerSearch());
  });
};

export const addApartaments = (officeId, streetAddress, apartmentNumber) => (
  dispatch,
  getState
) => {
  const postData = {
    office: {
      uuid: officeId
    },
    streetAddress,
    apartmentNumber: Number(apartmentNumber)
  };
  authPut(PATHS.OFFICE_APARTAMENTS, [postData]);
};

export const addApartament = ({ officeId, streetAddress, apartmentNumber }) => (
  dispatch,
  getState
) => {
  const postData = {
    office: {
      uuid: officeId
    },
    streetAddress,
    apartmentNumber: Number(apartmentNumber)
  };
  authPut(PATHS.OFFICE_APARTAMENTS, [postData]).then(res =>
    dispatch(triggerSearch())
  );
  dispatch(push("/"));
};

const triggerSearch = () => ({
  type: "TRIGGER_FETCH"
});

export const removeOffice = data => () => {
  authPut(PATHS.OFFICE_ADD, data);
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

export const setDestinationOffice = payload => ({
  type: SET_DESTINATION_OFFICE,
  payload
});
