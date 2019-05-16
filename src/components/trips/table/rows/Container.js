import { connect } from "react-redux";
import Rows from "./Component";

const mapStateToProps = state => {
  return {
    ids: state.trips.ids,
    ready: !!state.trips && !!state.trips.ids && state.trips.ids.length > 0
  };
};

export default connect(
  mapStateToProps,
  null
)(Rows);
