import { connect } from "react-redux";
import Columns from "./Component";
import { approveTripFromDetails } from "./../../../../features/tripsDetails/actions";

const mapStateToProps = (state, { id }) => {
  const tripDetails = state.tripDetails.byId[id];
  console.log(tripDetails);
  return {
    id: tripDetails.uuid,
    departureDate: tripDetails.trip.departureDate,
    returnDate: tripDetails.trip.returnDate,
    approved: tripDetails.approved,
    details: [
      tripDetails.appUser.name,
      tripDetails.appUser.lastName,
      tripDetails.isHotelNeed ? "Viešbutyje" : "Apartamentuose"
    ]
  };
};

export default connect(
  mapStateToProps,
  {
    handleClick: approveTripFromDetails
  }
)(Columns);
