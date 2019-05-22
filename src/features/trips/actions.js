import { authPost, authPut, PATHS } from "./../../utils/axios";
import { SET_TRIPS } from "./constants";

export const fetchTrips = () => dispatch => {
  authPost(PATHS.TRIP).then(res => {
    console.log(res.data);
    dispatch(normaliseAndSave(res.data));
    dispatch(addTrip(res.data));
  });
};

export const addTrip = data => (dispatch, getState) => {
  // const officeId = data[0].uuid;
  // const userId = getState().user.uuid;
  // const formData = new FormData();
  const dataPut = {
    office: {
      uuid: "18495c01-5cd8-4962-aa0a-17a7581da27c"
    },
    coordinator: {
      uuid: "cb72f08d-2e92-4975-b06f-8d8a26f6706b"
    },
    status: "cool",
    departureDate: "2011-12-03T10:15:30",
    returnDate: "2011-12-03T10:15:30",
    destination: "Vilnius"
  };
  // formData.append("office", officeId);
  // formData.append("departureDate", "2011-12-03T10:15:30");
  // formData.append("returnDate", "2011-12-03T10:15:30");
  // formData.append("coordinator", userId);
  // formData.append("status", "cool");
  // if (!!getState().offices.ids) {
  //   const officeId = getState().offices.ids[0];
  //   const formData = new FormData();
  //   formData.append("office", officeId);
  // authPut(PATHS.TRIP + "/false", dataPut).then(res => console.log(res));
  // }
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
