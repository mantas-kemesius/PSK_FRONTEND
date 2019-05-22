import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import breakpoints from "./../features/breakpoints/reducer";
import user from "./../features/user/reducer";
import users from "./../features/users/reducer";
import trips from "./../features/trips/reducer";
import offices from "./../features/offices/reducer";
import officeApartaments from "./../features/officeApartaments/reducer";
import availabilities from "./../features/availabilities/reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    breakpoints,
    user,
    trips,
    offices,
    officeApartaments,
    availabilities,
    users
  });
