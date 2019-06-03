import { connect } from "react-redux";
import Columns from "./Component";
import { approveTripFromDetails } from "./../../../../features/tripsDetails/actions";
import { isEmployeeAvailableByGivenDates } from "./../../../../features/users/selectors";

const mapStateToProps = (state, { id }) => {
  const tripDetails = state.tripDetails.byId[id];

  return {
    id: tripDetails.uuid,
    departureDate: tripDetails.trip.departureDate,
    returnDate: tripDetails.trip.returnDate,
    approved: tripDetails.approved,
    possibleToClick: tripDetails.appUser.uuid === state.user.uuid,
    isUserAvailable: isEmployeeAvailableByGivenDates(
      state,
      tripDetails.trip.departureDate,
      tripDetails.trip.returnDate,
      state.user.uuid
    ),
    carNeeded: tripDetails.carNeeded,
    ticketNeeded: tripDetails.ticketNeeded,
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
