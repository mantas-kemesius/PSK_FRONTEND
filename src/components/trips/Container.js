import { connect } from "react-redux";
import TripsTable from "./Component";

const mapStateToProps = state => {
  return {
    isVisible: state.user.isAuth
  };
};

export default connect(
  mapStateToProps,
  null
)(TripsTable);
