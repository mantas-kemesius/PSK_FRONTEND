import { connect } from "react-redux";
import Rows from "./Component";
import { showTripDetailsInModal } from "./../../../../features/tripsDetails/actions";

const mapStateToProps = state => {
  const details = Object.keys(state.tripDetails.relatedTripIds).filter(
    id =>
      state.tripDetails.relatedTripIds[id] === state.tripDetails.activeTripId
  );
  return {
    ids: details
  };
};

export default connect(
  mapStateToProps,
  {
    handleClick: showTripDetailsInModal
  }
)(Rows);
