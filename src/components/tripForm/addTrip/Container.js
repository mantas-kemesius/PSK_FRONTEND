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
import {
  setSelectedOffice,
  setDestinationOffice
} from "./../../../features/offices/actions";
import { getOrganizatorsForSelectInput } from "./../../../features/users/selectors";

const mapStateToProps = state => {
  return {
    offices: getOfficesForSelectInput(state),
    destinations: getDestinationsForSelectInput(state),
    organizators: getOrganizatorsForSelectInput(state),
    isModalOpen: state.trips.isModalOpen,
    isDestinationFieldActive: !state.offices.selectedTripStartId
  };
};

export default connect(
  mapStateToProps,
  {
    add: addTrip,
    handleBtnClick: connectTrips,
    setTripStartId: setSelectedOffice,
    setDestination: setDestinationOffice
  }
)(TripForm);
