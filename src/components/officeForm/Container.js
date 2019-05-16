import { connect } from "react-redux";
import OfficeForm from "./Component";
import { addNewOffice } from "./../../features/offices/actions";

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {
    add: addNewOffice
  }
)(OfficeForm);
