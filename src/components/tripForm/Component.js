import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import AddTripForm from "./addTrip/Container";
import AddTripDetailsForm from "./addDetails/Container";

class TripForm extends React.Component {
  render() {
    return (
      <>
        {this.props.isDetailsVisible ? <AddTripDetailsForm /> : <AddTripForm />}
      </>
    );
  }
}

export default TripForm;
