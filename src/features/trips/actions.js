import { authPost, PATHS } from "./../../utils/axios";
import { SET_TRIPS } from "./constants";

export const fetchTrips = () => dispatch => {
  authPost(PATHS.TRIP).then(res => dispatch(normaliseAndSave(res.data)));
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
  type: SET_TRIPS,
  payload
});
