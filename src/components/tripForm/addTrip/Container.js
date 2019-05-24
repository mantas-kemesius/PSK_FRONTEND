import { connect } from "react-redux";
import TripForm from "./Component";
import {
  addTrip,
  connectTrips,
  toggleApartamentCheckbox
} from "./../../../features/trips/actions";
import {
  getOfficesForSelectInput,
  getDestinationsForSelectInput
} from "./../../../features/offices/selectors";
import { setSelectedOffice } from "./../../../features/offices/actions";
import { getOrganizatorsForSelectInput } from "./../../../features/users/selectors";

const mapStateToProps = state => ({
  offices: getOfficesForSelectInput(state),
  destinations: getDestinationsForSelectInput(state),
  organizators: getOrganizatorsForSelectInput(state),
  isModalOpen: state.trips.isModalOpen,
  isDestinationFieldActive: !state.offices.selectedTripStartId,
  isCheckboxChecked: !!state.trips.isApartamentCheckboxChecked
});

export default connect(
  mapStateToProps,
  {
    add: addTrip,
    handleBtnClick: connectTrips,
    setTripStartId: setSelectedOffice,
    handleCheckboxChange: toggleApartamentCheckbox
  }
)(TripForm);
