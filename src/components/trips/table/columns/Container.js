import { connect } from "react-redux";
import Columns from "./Component";
import { setTripConfirmed } from "./../../../../features/tripsDetails/actions";
import { showTripDetailsInModal } from "./../../../../features/tripsDetails/actions";

const mapStateToProps = (state, { id }) => {
  const trip = state.trips.byId[id];
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
    id: trip.uuid,
    trips: trip,
    isButtonActive: trip.coordinator.uuid === state.user.uuid,
    isConfirmed: trip.status === "CONFIRMED",
    ready: !!state.trips && !!state.trips.byId
  };
};

export default connect(
  mapStateToProps,
  {
    handleClick: setTripConfirmed,
    view: showTripDetailsInModal
  }
)(Columns);
