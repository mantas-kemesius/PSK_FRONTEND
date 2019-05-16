import { connect } from "react-redux";
import Columns from "./Component";

const mapStateToProps = (state, { id }) => {
  const trip = state.trips.byId[id];
  const departureIndex = trip.departureDate.indexOf("T");
  const returnIndex = trip.returnDate.indexOf("T");
  const departureDate = trip.departureDate.substr(0, departureIndex);
  const returnDate = trip.returnDate.substr(0, returnIndex);
  return {
    trip: [
      trip.destination,
      trip.office,
      trip.status,
      trip.coordinator.name + " " + trip.coordinator.lastName,
      departureDate,
      returnDate
    ],
    trips: trip,
    ready: !!state.trips && !!state.trips.byId
  };
};

export default connect(
  mapStateToProps,
  null
)(Columns);
