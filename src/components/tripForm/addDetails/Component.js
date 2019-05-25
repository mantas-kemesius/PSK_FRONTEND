import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import GoingEmployee from "./goingEmployees/Container";
import { Link } from "react-router-dom";

const getLabel = (organizators, id) => {
  let label = "";
  organizators.forEach(item => {
    if (id === item.id) {
      label = item.label;
    }
  });
  return label;
};

const getNotBusyEmployees = (organizators, ids) => {
  return organizators.filter(item => ids.indexOf(item.id) === -1);
};

class TripForm extends React.Component {
  state = {
    employeeIds: [""],
    hotel: false,
    apartament: true,
    car: true,
    ticket: false
  };

  getEmployeeSelectInputs = () => {
    if (!this.props.employees.length) {
      return null;
    }
    return this.state.employeeIds.map((id, key) => (
      <select
        key={`selects-${id}-${key}`}
        className="w95p h40 p10 fz18 b-s1-grey"
        value={this.state.coordinatorId}
        onChange={e => this.handleCoordinatorChange(e, key)}
      >
        {!!id ? (
          <option key="employee" value="">
            {getLabel(this.props.employees, id)}
          </option>
        ) : (
          <option key="employee" value="">
            Darbuotojas
          </option>
        )}
        {!!this.props.employees &&
          getNotBusyEmployees(this.props.employees, this.state.employeeIds).map(
            item => (
              <option key={`${item.id}`} value={item.id}>
                {item.label}
              </option>
            )
          )}
      </select>
    ));
  };

  handleClick = () => {
    const data = {
      employeeIds: this.state.employeeIds,
      apartament: this.props.isApartamentsBooked
        ? true
        : this.props.isPossibleToBookApartaments && this.state.apartament,
      hotel: this.props.isApartamentsBooked
        ? false
        : this.props.isPossibleToBookApartaments && this.state.hotel,
      car: this.state.car,
      ticket: this.state.ticket
    };
    this.props.add({ ...data });
  };

  addAdditionalField = () => {
    let { employeeIds } = this.state;
    employeeIds.push("");
    this.setState({ employeeIds });
  };

  handleCoordinatorChange = (e, key) => {
    let { employeeIds } = this.state;
    employeeIds[key] = e.target.value;
    this.setState({ employeeIds });
  };

  onLivingPlaceChange = key => {
    if (key === "hotel") {
      this.setState({ hotel: true, apartament: false });
    } else {
      this.setState({ apartament: true, hotel: false });
    }
  };

  onTransportChange = key => {
    if (key === "car") {
      this.setState({ car: true, ticket: false });
    } else {
      this.setState({ ticket: true, car: false });
    }
  };

  render() {
    return (
      <>
        <div className="w100p df aic jc-center">
          <div className="w50p">
            <div className="mt10p mb5p">
              <h2>Pridėti kelionės papildoma informacija:</h2>
            </div>
            <GoingEmployee />
            {this.getEmployeeSelectInputs()}
            {!!getNotBusyEmployees(this.props.employees, this.state.employeeIds)
              .length && (
              <div className="w100p pt20">
                <button
                  className="w100p h50 p10 fz18 bg-default cw fwb"
                  onClick={this.addAdditionalField}
                >
                  Prideti darbuotoja
                </button>
              </div>
            )}
            {this.props.isWithDetails
              ? this.getSelectedTripDetails()
              : this.getTripDetailsForms()}
            <button
              className="w100p h50 p10 fz18 bg-success cw fwb"
              onClick={this.handleClick}
            >
              {this.props.isWithDetails ? "Grįžti į pagrindinį" : "Išsaugoti"}
            </button>
          </div>
        </div>
      </>
    );
  }

  getTripDetailsForms = () => {
    return (
      <>
        {this.props.isApartamentsBooked ? (
          <div className="w100p pt20 pb20">
            <h3>Apgyvendinimas: Devbridge apartamentuos</h3>
          </div>
        ) : this.props.isPossibleToBookApartaments ? (
          <div className="w100p pt20 pb20">
            <h3>Apgyvendinimas</h3>
            <div>
              <input
                type="radio"
                checked={this.state.apartament}
                onChange={() => this.onLivingPlaceChange("apartament")}
              />
              <label> Devbridge apartamentai</label>
            </div>
            <div>
              <input
                type="radio"
                checked={this.state.hotel}
                onChange={() => this.onLivingPlaceChange("hotel")}
              />
              <label> Viešbutis</label>
            </div>
          </div>
        ) : (
          <div className="w100p pt20 pb20">
            <h3>Apgyvendinimas: Viešbutis</h3>
          </div>
        )}
        <div className="w100p pb20">
          <h3>Keliaus su</h3>
          <div>
            <input
              type="radio"
              checked={this.state.car}
              onChange={() => this.onTransportChange("car")}
            />
            <label> Automobiliu</label>
          </div>
          <div>
            <input
              type="radio"
              checked={this.state.ticket}
              onChange={() => this.onTransportChange("ticket")}
            />
            <label> Lektuvu</label>
          </div>
        </div>
      </>
    );
  };

  getSelectedTripDetails = () => {
    return (
      <div>
        <div className="w100p pt20">
          <h3>
            Apgyvendinimas:{" "}
            {this.props.details.hotel
              ? "Viešbutyje"
              : "Devbridge apartamentuos"}
          </h3>
        </div>
        <div className="w100p pt20 pb20">
          <h3>
            Keliaus su: {this.props.details.car ? "Automobiliu" : "Lėktuvu"}
          </h3>
        </div>
      </div>
    );
  };
}

export default TripForm;
