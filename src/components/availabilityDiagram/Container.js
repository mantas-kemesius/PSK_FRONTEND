import { connect } from "react-redux";
import Chart from "./Component";
import { createdTripStats } from "./../../features/stats/selectors";
import { setYears } from "./../../features/filters/actions";

const mapStateToProps = state => {
  const stats = createdTripStats(state);
  return {
    isAuth: state.user.isAuth,
    metrics: stats.metrics,
    years: stats.years,
    year: state.filters.years
  };
};

export default connect(
  mapStateToProps,
  { handleYearsChange: setYears }
)(Chart);
