import React from "react";

class RegisterForm extends React.Component {
  state = {
    oldPassword: "",
    newPassword: ""
  };

  handleClick = () => {
    this.props.handleClick({ ...this.state });
  };

  onOldPasswordChange = e => {
    this.setState({ oldPassword: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ newPassword: e.target.value });
  };

  render() {
    return (
      <div className="w100p df aic jc-center">
        <div className="w30p mt10p">
          <h2>Keisti slapdažodį:</h2>
          <input
            placeholder="old password"
            type="password"
            className="w95p h40 p10 fz18 b-s1-grey"
            value={this.state.oldPassword}
            onChange={this.onOldPasswordChange}
          />
          <input
            placeholder="password"
            type="password"
            className="w95p h40 p10 fz18 b0 b-s1-grey"
            value={this.state.newPassword}
            onChange={this.onPasswordChange}
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

export default RegisterForm;
