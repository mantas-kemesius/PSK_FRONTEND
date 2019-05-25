import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import breakpoints from "./../features/breakpoints/reducer";
import user from "./../features/user/reducer";
import users from "./../features/users/reducer";
import trips from "./../features/trips/reducer";
import tripDetails from "./../features/tripsDetails/reducer";
import offices from "./../features/offices/reducer";
import officeApartaments from "./../features/officeApartaments/reducer";
import apartamentsAvailabilities from "./../features/apartamentsAvailabilities/reducer";
import usersAvailabilities from "./../features/availabilities/reducer";
import filters from "./../features/filters/reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    breakpoints,
    user,
    trips,
    tripDetails,
    offices,
    officeApartaments,
    apartamentsAvailabilities,
    usersAvailabilities,
    users,
    filters
  });
