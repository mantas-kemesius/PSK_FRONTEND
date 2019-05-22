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
    status: "",
    destination: "",
    shouldConnect: false,
    departureDate: new Date(),
    returnDate: new Date(),
    coordinatorId: "",
    officeId: ""
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
    this.setState({ destination: e.target.value });
  };
  handleCoordinatorChange = e => {
    this.setState({ coordinatorId: e.target.value });
  };
  handleOfficeChange = e => {
    this.setState({ officeId: e.target.value });
  };

  onStatusChange = e => {
    this.setState({ status: e.target.value });
  };

  onShouldConnectChange = e => {
    this.setState({ shouldConnect: e.target.checked });
  };

  render() {
    return (
      <>
        <div className="w100p df aic jc-center">
          <div className="w50p">
            <div className="mt10p mb5p">
              <h2>Pridėti naują kelionę:</h2>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.shouldConnect}
                  onChange={this.onShouldConnectChange}
                />{" "}
                Apjungti kelione
              </label>
            </div>
            <input
              placeholder="Šalis"
              type="text"
              className="w95p h30 p10 fz18 b-s1-grey"
              value={this.state.destination}
              onChange={this.onDestinationChange}
            />
            <input
              placeholder="Būsena"
              type="text"
              className="w95p h30 p10 fz18 b-s1-grey"
              value={this.state.status}
              onChange={this.onStatusChange}
            />
            <select
              className="w95p h40 p10 fz18 b-s1-grey"
              value={this.state.coordinatorId}
              onChange={this.handleCoordinatorChange}
            >
              <option key="Koordinatorius" value="">
                Koordinatorius
              </option>
              {!!this.props.organizators &&
                this.props.organizators.map(item => (
                  <option key={`${item.id}`} value={item.id}>
                    {item.label}
                  </option>
                ))}
            </select>
            <select
              className="w95p h40 p10 fz18 b-s1-grey"
              value={this.state.officeId}
              onChange={this.handleOfficeChange}
            >
              <option key="biuras" value="">
                Biuras
              </option>
              {!!this.props.offices &&
                this.props.offices.map(item => (
                  <option key={`${item.id}`} value={item.id}>
                    {item.label}
                  </option>
                ))}
            </select>
            <DatePicker
              selected={this.state.departureDate}
              onChange={this.handleDepartureDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              dateFormat="yyyy-MM-dd HH:mm"
              timeCaption="time"
              className="w100p h30 p10 fz18 b-s1-grey"
            />
            <div>
              <DatePicker
                selected={this.state.returnDate}
                onChange={this.handleReturnDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                dateFormat="yyyy-MM-dd HH:mm"
                timeCaption="time"
                className="w100p h30 p10 fz18 b-s1-grey"
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
