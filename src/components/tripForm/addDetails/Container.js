import { connect } from "react-redux";
import TripForm from "./Component";
import { connectTrips } from "./../../../features/trips/actions";
import { addTripDetails } from "./../../../features/tripsDetails/actions";
import {
  getAvailableEmployeesForSelectInput,
  getAlreadyGoingEmployeesData,
  getTripDetails
} from "./../../../features/tripsDetails/selectors";

const mapStateToProps = state => ({
  employees: getAvailableEmployeesForSelectInput(state),
  goingEmployees: getAlreadyGoingEmployeesData(state),
  isModalOpen: state.trips.isModalOpen,
  details: getTripDetails(state),
  isWithDetails: !!state.trips.additionalTripId
});

export default connect(
  mapStateToProps,
  {
    add: addTripDetails,
    handleBtnClick: connectTrips
  }
)(TripForm);
