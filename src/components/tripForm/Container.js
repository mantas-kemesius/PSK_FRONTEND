import { connect } from "react-redux";
import TripForm from "./Component";

const mapStateToProps = state => ({
  isDetailsVisible: state.trips.isFormVisible
});

export default connect(mapStateToProps)(TripForm);
