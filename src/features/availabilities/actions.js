import { authPost, authPut, PATHS } from "./../../utils/axios";
import { SET_AVAILABILITIES } from "./constants";

export const fetchAvailabilities = () => dispatch => {
  authPost(PATHS.AVAILABILITY).then(res =>
    dispatch(normaliseAndSave(res.data))
  );
};

export const setEmployeesNotAvailableDates = (
  unavailableFrom,
  unavailableTo,
  userIds
) => (dispatch, getState) => {
  const postData = userIds.map(userId => {
    return {
      unavailableFrom,
      unavailableTo,
      appUser: {
        uuid: userId
      },
      reason: "TRIP"
    };
  });
  authPut(PATHS.AVAILABILITY, postData).then(res => dispatch(triggerSearch()));
};
export const triggerSearch = () => ({
  type: "TRIGGER_FETCH"
});

const normaliseAndSave = data => dispatch => {
  let ids = [];
  let byId = {};
  let relatedUserIds = {};
  data.forEach(item => {
    byId = {
      ...byId,
      [item.uuid]: {
        ...item
      }
    };
    ids.push(item.uuid);
    relatedUserIds = {
      ...relatedUserIds,
      [item.uuid]: item.appUser.uuid
    };
  });
  dispatch(save({ ids, byId, relatedUserIds }));
};

export const save = payload => ({
  type: SET_AVAILABILITIES,
  payload
});
