import { connect } from "react-redux";
import TripsTable from "./Component";

const tableHead = ["Vardas", "Pavardė", "Apsistos", "Keliaus su", "Veiksmai"];

const mapStateToProps = state => {
  return { tableHead };
};

export default connect(
  mapStateToProps,
  null
)(TripsTable);
