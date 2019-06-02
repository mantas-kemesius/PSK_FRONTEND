import React from "react";

class OfficeForm extends React.Component {
  state = {
    officeId: "",
    streetAddress: "",
    apartmentNumber: 0
  };

  handleClick = () => {
    this.props.add(this.state);
  };

  handleOfficeChange = e => {
    this.setState({ officeId: e.target.value });
  };

  onApartamentAddressChange = e => {
    this.setState({ streetAddress: e.target.value });
  };
  onApartmentNumberChange = e => {
    this.setState({ apartmentNumber: e.target.value });
  };
  componentDidUpdate() {
    if (this.props.offices.length && this.state.officeId === "") {
      this.setState({
        officeId: this.props.offices[0].id
      });
    }
  }
  render() {
    return (
      <div className="w100p df aic jc-center">
        <div className="w30p">
          <div className="mt10p mb5p">
            <h2>Pridėti naują biuro apartamentą:</h2>
          </div>
          <div className="w100p pb10 pt20 fwb">Biuras: </div>
          <select
            className="w100p h50 p10 fz18 b-s1-grey"
            value={this.state.officeId}
            onChange={this.handleOfficeChange}
          >
            {!!this.props.offices &&
              this.props.offices.map(item => (
                <option key={`${item.id}`} value={item.id}>
                  {item.label}
                </option>
              ))}
          </select>
          <div className="w100p pb10 pt20 fwb">Apartamentų adresas: </div>
          <input
            placeholder="Apartamentų adresas"
            type="text"
            className="w95p h30 p10 fz18 b-s1-grey"
            value={this.state.streetAddress}
            onChange={this.onApartamentAddressChange}
          />
          <div className="w100p pb10 pt20 fwb">Apartamento numeris: </div>
          <input
            placeholder="Apartamento numeris"
            type="text"
            className="w95p h30 p10 fz18 b-s1-grey"
            value={this.state.apartmentNumber}
            onChange={this.onApartmentNumberChange}
          />
          <div className="w100p pt20">
            <button
              className="w100p h50 p10 fz18 bg-default cw fwb"
              onClick={this.handleClick}
            >
              Pridėti
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OfficeForm;
