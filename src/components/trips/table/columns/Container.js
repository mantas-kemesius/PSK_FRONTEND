import { connect } from "react-redux";
import Columns from "./Component";

const mapStateToProps = (state, { id }) => {
  const trip = state.trips.byId[id];
  return {
    trip: [
      trip.destination,
      trip.office,
      trip.status,
      trip.coordinator.name + " " + trip.coordinator.lastName
    ],
    trips: trip,
    ready: !!state.trips && !!state.trips.byId
  };
};

export default connect(
  mapStateToProps,
  null
)(Columns);
