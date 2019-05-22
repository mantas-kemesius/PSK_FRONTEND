import { authPost, PATHS } from "./../../utils/axios";
import { FETCH } from "./constants";

export const fetchAllUsers = () => (dispatch, getState) => {
  authPost(PATHS.USER_GET).then(res => dispatch(normaliseAndSave(res.data)));
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
  type: FETCH,
  payload: payload
});
