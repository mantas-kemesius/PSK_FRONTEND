import React from "react";
import Modal from "react-modal";
import TripDetailsTable from "./table/Container";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "99%",
    height: "99%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const cutDate = date => {
  const index = date.indexOf("T");
  return date.substr(0, index);
};

class TripForm extends React.Component {
  render() {
    if (!this.props.isModalOpen) return null;
    const {
      departureOffice,
      destinationOffice,
      departureDate,
      returnDate,
      coordinator
    } = this.props.trip;
    return (
      <Modal
        isOpen={this.props.isModalOpen}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="df" style={{ justifyContent: "space-between" }}>
          <div>
            <div className="fwb fz19">
              Kelionė iš: {departureOffice.country}, {departureOffice.city},{" "}
              {departureOffice.streetAddress}
            </div>
            <div className="fwb fz19 pt10">
              Kelionė į: {destinationOffice.country}, {destinationOffice.city},{" "}
              {destinationOffice.streetAddress}
            </div>
            <div className="fwb fz16 pt10">
              Organizatorius: {coordinator.name} {coordinator.lastName}
            </div>
            <div className="fwb fz16 pt10">
              Išvykimo data: {cutDate(departureDate)}
            </div>
            <div className="fwb fz16 pt10">
              Grįžimo data: {cutDate(returnDate)}
            </div>
          </div>
          <div>
            <i
              className="fa fa-times fz25 cp"
              onClick={this.props.closeModal}
              aria-hidden="true"
              style={{ color: "#828080", paddingRight: 10 }}
            />
          </div>
        </div>
        <div className="pt20">
          <TripDetailsTable />
        </div>
      </Modal>
    );
  }
}

export default TripForm;
