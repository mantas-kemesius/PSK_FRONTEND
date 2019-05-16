import { connect } from "react-redux";
import TripsTable from "./Component";

const tableHead = [
  "Miestas",
  "Įstaiga",
  "Statusas",
  "Koordinatorius",
  "Veiksmai"
];

const mapStateToProps = state => {
  return { tableHead };
};

export default connect(
  mapStateToProps,
  null
)(TripsTable);
