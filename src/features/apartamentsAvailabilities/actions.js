import { authPost, PATHS } from "./../../utils/axios";
import { SET_OFFICE_APARTAMENTS_AVAILABILIETS } from "./constants";

export const fetchApartamentsAvailabilities = () => dispatch => {
  authPost(PATHS.APARTAMENT_AVAILABILITY).then(res =>
    dispatch(normaliseAndSave(res.data))
  );
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
  type: SET_OFFICE_APARTAMENTS_AVAILABILIETS,
  payload
});
