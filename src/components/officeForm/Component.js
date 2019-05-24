import React from "react";

class OfficeForm extends React.Component {
  state = {
    country: "",
    city: "",
    streetAddress: "",
    apartamentStreetAddress: ""
  };

  handleClick = () => {
    const formData = new FormData();
    formData.append("country", this.state.country);
    formData.append("city", this.state.city);
    formData.append("streetAddress", this.state.streetAddress);
    this.props.add({ ...this.state });
  };

  onCountryChange = e => {
    this.setState({ country: e.target.value });
  };

  onCityChange = e => {
    this.setState({ city: e.target.value });
  };

  onAddressChange = e => {
    this.setState({ streetAddress: e.target.value });
  };

  onApartamentAddressChange = e => {
    this.setState({ apartamentStreetAddress: e.target.value });
  };
  render() {
    return (
      <div className="w100p df aic jc-center">
        <div className="w30p">
          <div className="mt10p mb5p">
            <h2>Pridėti naują biurą:</h2>
          </div>
          <input
            placeholder="Šalis"
            type="text"
            className="w95p h30 p10 fz18 b-s1-grey"
            value={this.state.country}
            onChange={this.onCountryChange}
          />
          <input
            placeholder="Miestas"
            type="text"
            className="w95p h30 p10 fz18 b-s1-grey"
            value={this.state.city}
            onChange={this.onCityChange}
          />
          <input
            placeholder="Adresas"
            type="text"
            className="w95p h30 p10 fz18 b-s1-grey"
            value={this.state.streetAddress}
            onChange={this.onAddressChange}
          />
          <input
            placeholder="Apartamentų adresas"
            type="text"
            className="w95p h30 p10 fz18 b-s1-grey"
            value={this.state.apartamentStreetAddress}
            onChange={this.onApartamentAddressChange}
          />
          <button
            className="w100p h50 p10 fz18 bg-default cw fwb"
            onClick={this.handleClick}
          >
            Pridėti
          </button>
        </div>
      </div>
    );
  }
}

export default OfficeForm;
