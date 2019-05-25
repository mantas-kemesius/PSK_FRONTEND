import { connect } from "react-redux";
import Rows from "./Component";

const getFilteredIds = state => {
  const isAll = state.filters.activeTripFilter === "ALL";
  if (isAll) return state.trips.ids;
  return state.trips.ids.filter(
    id => state.trips.byId[id].status === state.filters.activeTripFilter
  );
};

const mapStateToProps = state => {
  return {
    ids: getFilteredIds(state),
    ready: !!state.trips && !!state.trips.ids && state.trips.ids.length > 0
  };
};

export default connect(
  mapStateToProps,
  null
)(Rows);
