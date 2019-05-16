import { connect } from "react-redux";
import Columns from "./Component";

const mapStateToProps = (state, { id }) => {
  const office = state.offices.byId[id];
  return {
    trip: [office.country, office.city, office.streetAddress],
    ready: !!state.offices && !!state.offices.byId
  };
};

export default connect(
  mapStateToProps,
  null
)(Columns);
