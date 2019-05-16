import { connect } from "react-redux";
import PastTrips from "./Component";

const tableHead = ["Vardas", "Pavardė", "Išvyko"];

const tableBody = [
  ["Jonas", "Jonaitis", "2019-07-20"],
  ["Petras", "Petraitis", "2019-07-13"],
  ["Ona", "Onutė", "2019-07-16"]
];

const mapStateToProps = state => {
  return { tableHead, tableBody };
};

export default connect(
  mapStateToProps,
  null
)(PastTrips);
