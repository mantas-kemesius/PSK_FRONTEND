import { initBreakpoints } from "../features/breakpoints/actions";
import { isAuth } from "./../features/user/selectors";
import { setAuth, fetchUserDetails } from "./../features/user/actions";
import { fetchAllUsers } from "./../features/users/actions";
import { fetchTrips } from "./../features/trips/actions";
import { fetchAvailabilities } from "./../features/availabilities/actions";
import { fetchOfficeApartaments } from "./../features/officeApartaments/actions";
import { fetchOffices } from "./../features/offices/actions";

export const initialize = ({ dispatch }) => {
  dispatch(initBreakpoints());
  if (isAuth()) {
    dispatch(fetchAllUsers());
    dispatch(setAuth(JSON.parse(localStorage.getItem("user")).username));
    dispatch(fetchTrips());
    dispatch(fetchAvailabilities());
    dispatch(fetchOfficeApartaments());
    dispatch(fetchOffices());
    dispatch(fetchUserDetails());
  }
};
