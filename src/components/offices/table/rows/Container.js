import { connect } from "react-redux";
import Rows from "./Component";

const mapStateToProps = state => {
  return {
    ids: state.offices.ids,
    ready:
      !!state.offices && !!state.offices.ids && state.offices.ids.length > 0
  };
};

export default connect(
  mapStateToProps,
  null
)(Rows);
