import React from "react";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    width: "40%",
    height: "40%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class TripForm extends React.Component {
  state = {
    status: "IN PROGRESS",
    destination: "",
    departureDate: null,
    returnDate: null,
    coordinatorId: "",
    officeId: "",
    departureDisabled: true,
    destinationDisabled: true
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
    this.props.add({ ...this.state });
  };

  onDestinationChange = e => {
    this.setState({
      destination: e.target.value,
      departureDisabled: false,
      destinationDisabled: false
    });
    this.props.setDestination(e.target.value);
  };
  handleCoordinatorChange = e => {
    this.setState({ coordinatorId: e.target.value });
  };
  handleOfficeChange = e => {
    this.setState({ officeId: e.target.value });
    this.props.setTripStartId(e.target.value);
  };

  render() {
    return (
      <>
        <div className="w100p df aic jc-center pb20">
          <div className="w50p">
            <div className="pt20 mb5p">
              <h2>Pridėti naują kelionę:</h2>
            </div>
            <div className="w100p pb20">
              <div className="w100p pb10 fwb">Kelionės pradžia: </div>
              <select
                className="w100p h50 p10 fz18 b-s1-grey"
                value={this.state.officeId}
                onChange={this.handleOfficeChange}
              >
                <option key="biuras" value="">
                  Kelionės pradžia
                </option>
                {!!this.props.offices &&
                  this.props.offices.map(item => (
                    <option key={`${item.id}`} value={item.id}>
                      {item.label}
                    </option>
                  ))}
              </select>
            </div>
            <div className="w100p pb20">
              <div className="w100p pb10 fwb">Kelionės pabaiga: </div>
              <select
                className="w100p h50 p10 fz18 b-s1-grey"
                value={this.state.destination}
                onChange={this.onDestinationChange}
                disabled={this.props.isDestinationFieldActive}
              >
                <option key="destination" value="">
                  Kelionės tikslas
                </option>
                {!!this.props.destinations &&
                  this.props.destinations.map(item => (
                    <option key={`${item.id}`} value={item.id}>
                      {item.label}
                    </option>
                  ))}
              </select>
            </div>
            <div className="w100p pb20">
              <div className="w100p pb10 fwb">
                Kelionę koordinuojantis žmogus:{" "}
              </div>
              <select
                className="w100p h50 p10 fz18 b-s1-grey"
                value={this.state.coordinatorId}
                onChange={this.handleCoordinatorChange}
              >
                {!!this.props.organizators &&
                  this.props.organizators.map(item => (
                    <option key={`${item.id}`} value={item.id}>
                      {item.label}
                    </option>
                  ))}
              </select>
            </div>
            <div className="w100p pb20">
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
            <div className="w100p pb20">
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
              className="w100p h50 p10 fz18 bg-default cw fwb"
              onClick={this.handleClick}
            >
              Pridėti
            </button>
          </div>
        </div>
        <Modal
          isOpen={this.props.isModalOpen}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div>
            <div className="w100p t0">
              <h1>Ar norėtumėte sujungti keliones?</h1>
            </div>
            <div className="df jc-sb w90p b0 posa pb20">
              <div className="w30p">
                <button
                  className="w100p bg-danger bg-h-danger fz15 h30 cw br5 bs-light"
                  onClick={() => this.props.handleBtnClick(false, this.state)}
                >
                  Ne
                </button>
              </div>
              <div className="w30p">
                <button
                  className="w100p bg-success bg-h-success fz15 h30 cw br5 bs-light"
                  onClick={() => this.props.handleBtnClick(true, this.state)}
                >
                  Taip
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default TripForm;
