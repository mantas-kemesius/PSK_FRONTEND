import { connect } from "react-redux";
import OfficeForm from "./Component";
import { addNewTrip } from "./../../features/trips/actions";

const mapStateToProps = state => {};

export default connect(
  mapStateToProps,
  {
    add: addNewTrip
  }
)(OfficeForm);
