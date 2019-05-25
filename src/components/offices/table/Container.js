import { connect } from "react-redux";
import TripsTable from "./Component";

const tableHead = ["Šalis", "Miestas", "Adresas"];

const mapStateToProps = state => {
  return { tableHead };
};

export default connect(
  mapStateToProps,
  null
)(TripsTable);
