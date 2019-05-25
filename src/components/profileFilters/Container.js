import { connect } from "react-redux";
import ProfileFilters from "./Component";
import { setFilterValue } from "../../features/filters/actions";

const mapStateToProps = state => {
  return {
    activeFilter: state.filters.activeFilter
  };
};
const mapDispatchToProps = {
  handleClick: setFilterValue
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileFilters);
