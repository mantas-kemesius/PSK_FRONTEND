import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import GoingEmployee from "./goingEmployees/Container";
import { authPost, authGet, authPut, PATHS } from "./../../../utils/axios";

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
    hotelNeeded: false,
    apartament: true,
    userSaved: false
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
    this.state.users.forEach(item => {
      authPut(PATHS.TRIP_DETAILS_UPDATE, item).then(res => this.props.add());
    });
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
      this.setState({ hotelNeeded: true, apartament: false });
    } else {
      this.setState({ apartament: true, hotelNeeded: false });
    }
  };

  saveUsers = () => {
    const postData = this.state.employeeIds.map(item => {
      return {
        trip: {
          uuid: this.props.tripId
        },
        appUser: {
          uuid: item
        },
        ticketNeeded: false,
        carNeeded: false,
        hotelNeeded: false
      };
    });
    authPost(PATHS.TRIP_DETAILS_CREATE, postData).then(res => {
      authGet(PATHS.TRIP_DETAILS + "/" + this.props.tripId).then(res2 => {
        authPut("/api/trip/setApts", res2.data).then(res3 => {
          this.setState({
            userSaved: true,
            users: res3.data
          });
        });
      });
    });
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
            {this.state.userSaved ? (
              <ul>
                {this.state.users.map((user, key) => (
                  <li key={key}>
                    {user.appUser.name} {user.appUser.lastName} -
                    apgyvendinimas:{" "}
                    {user.hotelNeeded
                      ? "Viešbutyje"
                      : "Apartamentuose, " +
                        user.officeApartament.streetAddress}
                  </li>
                ))}
              </ul>
            ) : (
              <>
                {this.getEmployeeSelectInputs()}
                {getNotBusyEmployees(
                  this.props.employees,
                  this.state.employeeIds
                ).length && (
                  <>
                    <div className="w100p pt20">
                      <button
                        className="w100p h50 p10 fz18 bg-default cw fwb"
                        onClick={this.addAdditionalField}
                      >
                        Prideti darbuotoja
                      </button>
                    </div>
                    <div className="w100p pt20">
                      <button
                        className="w100p h50 p10 fz18 bg-success cw fwb"
                        onClick={this.saveUsers}
                      >
                        Išsaugoti sąraša
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
            {this.state.userSaved && (
              <div className="pt20">
                <button
                  className="w100p h50 p10 fz18 bg-success cw fwb"
                  onClick={this.handleClick}
                >
                  {"Išsaugoti"}
                </button>
              </div>
            )}
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
                checked={this.state.hotelNeeded}
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
      </>
    );
  };

  getSelectedTripDetails = () => {
    return (
      <div>
        <div className="w100p pt20">
          <h3>
            Apgyvendinimas:{" "}
            {this.props.details.hotelNeeded
              ? "Viešbutyje"
              : "Devbridge apartamentuos"}
          </h3>
        </div>
      </div>
    );
  };
}

export default TripForm;
