import { connect } from "react-redux";
import Columns from "./Component";

const returnAll = (state, trip) => {
  const departureIndex = trip.departureDate.indexOf("T");
  const returnIndex = trip.returnDate.indexOf("T");
  const departureDate = trip.departureDate.substr(0, departureIndex);
  const returnDate = trip.returnDate.substr(0, returnIndex);
  return {
    trip: [
      trip.departureOffice.country + ", " + trip.departureOffice.city,
      trip.destinationOffice.country + ", " + trip.destinationOffice.city,
      trip.status,
      trip.coordinator.name + " " + trip.coordinator.lastName,
      departureDate,
      returnDate
    ],
    trips: trip,
    ready: !!state.trips && !!state.trips.byId,
    isVisible: true
  };
};

const mapStateToProps = (state, { id }) => {
  const trip = state.trips.byId[id];
  const isAll = state.filters.activeTripFilter === "ALL";

  if (isAll) {
    return returnAll(state, trip);
  }

  if (state.filters.activeTripFilter === trip.status) {
    return returnAll(state, trip);
  }

  return {
    isVisible: false
  };
};

export default connect(
  mapStateToProps,
  null
)(Columns);
