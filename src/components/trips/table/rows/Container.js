import { connect } from "react-redux";
import Rows from "./Component";

const getFilteredIds = state => {
  const isAll = state.filters.activeTripFilter === "ALL";
  if (
    !state.trips.ids.length &&
    !state.user &&
    !state.user.userRoleEnumList.length
  )
    return [];
  const ida = state.trips.ids.filter(id => {
    return (
      (state.user &&
        state.user.userRoleEnumList &&
        !!state.user.userRoleEnumList.length &&
        state.user.userRoleEnumList.indexOf("ADMINISTRATOR") !== -1) ||
      checkOrAuthUserExistInTrip(state, id) ||
      state.trips.byId[id].coordinator === state.user.uuid
    );
  });
  if (isAll) return ida;
  return ida.filter(
    id => state.trips.byId[id].status === state.filters.activeTripFilter
  );
};

const checkOrAuthUserExistInTrip = (state, tripId) => {
  const ida = Object.keys(state.tripDetails.relatedTripIds).filter(
    id => state.tripDetails.relatedTripIds[id] === tripId
  );
  const ids = ida.filter(
    id => state.tripDetails.relatedUserIds[id] === state.user.uuid
  );
  return !!ids.length;
};

const mapStateToProps = state => {
  return {
    ids: getFilteredIds(state),
    ready: !!state.trips && !!state.trips.ids && state.trips.ids.length > 0
  };
};

export default connect(mapStateToProps)(Rows);
