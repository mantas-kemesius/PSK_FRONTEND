import { connect } from "react-redux";
import FutureTrips from "./Component";
import React from "react";

const btn = (
  <button
    onClick={() => alert("Jus buvot pridėtas i kelione")}
    className="w100p bg-default bg-h-default h30 cw br5 bs-light"
  >
    Prisijungti į kelionę
  </button>
);

const tableHead = ["Vardas", "Pavardė", "Išvyksta", "Veiksmai"];

const tableBody = [
  ["Jonas", "Jonaitis", "2019-07-20", btn],
  ["Petras", "Petraitis", "2019-07-13", btn],
  ["Ona", "Onutė", "2019-07-16", btn]
];

const mapStateToProps = state => {
  return { tableHead, tableBody };
};

export default connect(
  mapStateToProps,
  null
)(FutureTrips);
