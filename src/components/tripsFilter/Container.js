import { connect } from "react-redux";
import ProfileFilters from "./Component";
import { setTripFilter } from "../../features/filters/actions";

const mapStateToProps = state => {
  return {
    activeFilter: state.filters.activeTripFilter
  };
};
const mapDispatchToProps = {
  handleClick: setTripFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileFilters);
