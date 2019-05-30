import React from "react";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";

class Details extends React.Component {
  state = {
    departureDate: null,
    returnDate: null
  };

  handleDepartureDateChange = date => {
    this.setState({
      departureDate: date
    });
  };

  handleReturnDateChange = date => {
    this.setState({
      returnDate: date
    });
  };

  handleClick = () => {
    this.props.add(this.state.departureDate, this.state.returnDate, [
      this.props.id
    ]);
    this.setState({
      departureDate: null,
      returnDate: null
    });
  };

  render() {
    return (
      <div
        className="w100p pb10 mt20 df jc-s-evenly"
        style={{ flexWrap: "wrap" }}
      >
        <div className="pb20">
          <div className="w100p pb10 fwb">Išvykimo data: </div>
          <DatePicker
            selected={this.state.departureDate}
            onChange={this.handleDepartureDateChange}
            timeFormat="HH:mm"
            timeIntervals={60}
            dateFormat="yyyy-MM-dd"
            timeCaption="time"
            className="w100p h30 p10 fz18 b-s1-grey"
            placeholderText="Įveskite išvykimo data..."
            excludeDates={this.props.unavailableDates}
            disabled={this.state.departureDisabled}
          />
        </div>
        <div className="pb20">
          <div className="w100p pb10 fwb">Grįžimo data: </div>
          <DatePicker
            selected={this.state.returnDate}
            onChange={this.handleReturnDateChange}
            timeFormat="HH:mm"
            timeIntervals={60}
            dateFormat="yyyy-MM-dd"
            timeCaption="time"
            placeholderText="Įveskite grįžimo data..."
            className="w100p h30 p10 fz18 b-s1-grey"
            excludeDates={this.props.unavailableDates}
            disabled={this.state.destinationDisabled}
          />
        </div>
        <button
          className="mt20 h50 p10 fz18 bg-default cw fwb"
          onClick={this.handleClick}
        >
          Pridėti
        </button>
      </div>
    );
  }
}

export default Details;
