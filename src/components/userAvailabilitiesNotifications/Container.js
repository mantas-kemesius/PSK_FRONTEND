import { connect } from "react-redux";
import Notifications from "./Component";
import { getTripsByUserId } from "../../features/tripsDetails/selectors";
import { approveTrip } from "../../features/tripsDetails/actions";

const mapStateToProps = state => {
  const data = getTripsByUserId(state, state.user.uuid);
  return {
    arr: !!data && data
  };
};

const mapDispatchToProps = {
  handleClick: approveTrip
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);
