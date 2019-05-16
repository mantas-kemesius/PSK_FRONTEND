import { authPost, PATHS } from "./../../utils/axios";
import { SET_AVAILABILITIES } from "./constants";

export const fetchAvailabilities = () => dispatch => {
  authPost(PATHS.AVAILABILITY).then(res =>
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
  type: SET_AVAILABILITIES,
  payload
});
