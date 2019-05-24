import { connect } from "react-redux";
import TripsTable from "./Component";

const tableHead = [
  "Išvyks iš",
  "Kelionės tikslas",
  "Statusas",
  "Koordinatorius",
  "Išvyk. Data",
  "Grįžimo Data"
];

const mapStateToProps = state => {
  return { tableHead };
};

export default connect(
  mapStateToProps,
  null
)(TripsTable);
