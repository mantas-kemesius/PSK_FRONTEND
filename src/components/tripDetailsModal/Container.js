import { connect } from "react-redux";
import TripDetailsModal from "./Component";
import { closeModal } from "./../../features/tripsDetails/actions";

const mapStateToProps = state => {
  return {
    isModalOpen: state.tripDetails.isModalOpen,
    trip: state.trips.byId[state.tripDetails.activeTripId]
  };
};

const mapDispatchToProps = {
  closeModal: closeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripDetailsModal);
