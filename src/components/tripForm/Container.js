import { connect } from "react-redux";
import TripForm from "./Component";
import { addTrip, connectTrips } from "./../../features/trips/actions";
import { getOfficesForSelectInput } from "./../../features/offices/selectors";
import { getOrganizatorsForSelectInput } from "./../../features/users/selectors";

const mapStateToProps = state => ({
  offices: getOfficesForSelectInput(state),
  organizators: getOrganizatorsForSelectInput(state),
  isModalOpen: state.trips.isModalOpen
});

export default connect(
  mapStateToProps,
  {
    add: addTrip,
    handleBtnClick: connectTrips
  }
)(TripForm);
