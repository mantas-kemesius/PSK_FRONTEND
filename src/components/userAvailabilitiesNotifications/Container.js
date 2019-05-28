import { connect } from "react-redux";
import Notifications from "./Component";
import { getTripsByUserId } from "../../features/tripsDetails/selectors";
import { approveTrip } from "../../features/tripsDetails/actions";

const mapStateToProps = state => {
  return {
    arr: getTripsByUserId(state, state.user.uuid)
  };
};

const mapDispatchToProps = {
  handleClick: approveTrip
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);
