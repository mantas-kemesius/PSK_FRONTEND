import { authPost, PATHS } from "./../../utils/axios";
import { SET_OFFICE_APARTAMENTS } from "./constants";

export const fetchOfficeApartaments = () => dispatch => {
  authPost(PATHS.OFFICE_APARTAMENTS).then(res =>
    dispatch(normaliseAndSave(res.data))
  );
};

const normaliseAndSave = data => dispatch => {
  let ids = [];
  let byId = {};
  let relatedOfficeIds = {};
  data.forEach(item => {
    byId = {
      ...byId,
      [item.uuid]: {
        ...item
      }
    };
    ids.push(item.uuid);
    relatedOfficeIds = {
      ...relatedOfficeIds,
      [item.office.uuid]: item.uuid
    };
  });
  dispatch(save({ ids, byId, relatedOfficeIds }));
};

export const save = payload => ({
  type: SET_OFFICE_APARTAMENTS,
  payload
});
