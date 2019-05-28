import { connect } from "react-redux";
import TripForm from "./Component";
import { connectTrips } from "./../../../features/trips/actions";
import { triggerSearch } from "./../../../features/tripsDetails/actions";
import { toggleTripsDetailsForm } from "../../../features/trips/actions";
import {
  getAvailableEmployeesForSelectInput,
  getAlreadyGoingEmployeesData,
  getTripDetails
} from "./../../../features/tripsDetails/selectors";
import { isPossibleToSelectApartament } from "../../../features/apartamentsAvailabilities/selectors";
import { push } from "connected-react-router";

const mapStateToProps = state => {
  return {
    tripId: state.trips.shouldConnect
      ? state.trips.additionalTripId
      : state.trips.tripId,
    employees: getAvailableEmployeesForSelectInput(state),
    goingEmployees: getAlreadyGoingEmployeesData(state),
    isModalOpen: state.trips.isModalOpen,
    details: state.trips.shouldConnect ? getTripDetails(state) : null,
    isWithDetails: state.trips.shouldConnect,
    isApartamentsBooked: !!state.trips.isApartamentCheckboxChecked,
    isPossibleToBookApartaments: isPossibleToSelectApartament(state)
  };
};

const mapDispatchToProps = dispatch => ({
  add: () => {
    dispatch(triggerSearch());
    dispatch(push("/"));
    dispatch(toggleTripsDetailsForm(false));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripForm);
