import { connect } from "react-redux";
import TripForm from "./Component";
import { connectTrips } from "./../../../features/trips/actions";
import { addTripDetails } from "./../../../features/tripsDetails/actions";
import {
  getAvailableEmployeesForSelectInput,
  getAlreadyGoingEmployeesData,
  getTripDetails
} from "./../../../features/tripsDetails/selectors";
import { isPossibleToSelectApartament } from "../../../features/apartamentsAvailabilities/selectors";

const mapStateToProps = state => {
  return {
    employees: getAvailableEmployeesForSelectInput(state),
    goingEmployees: getAlreadyGoingEmployeesData(state),
    isModalOpen: state.trips.isModalOpen,
    details: state.trips.shouldConnect ? getTripDetails(state) : null,
    isWithDetails: state.trips.shouldConnect,
    isApartamentsBooked: !!state.trips.isApartamentCheckboxChecked,
    isPossibleToBookApartaments: isPossibleToSelectApartament(state)
  };
};

export default connect(
  mapStateToProps,
  {
    add: addTripDetails,
    handleBtnClick: connectTrips
  }
)(TripForm);
