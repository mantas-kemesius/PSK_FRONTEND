import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleClick = () => {
    const formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);
    this.props.auth(formData, this.state.username);
  };

  onUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <div className="w100p df aic jc-center">
        <div
          className="w30p mt5p bs-light"
          style={{ paddingLeft: 40, paddingRight: 40, paddingBottom: 30 }}
        >
          <div className="w100p df aic jc-center">
            <div>
              <img
                width="300"
                src="https://www.relativity.com/relativity/cache/file/F02AF374-C299-6484-4C2798A99706E333_W700_Hauto.png"
              />
            </div>
          </div>
          <div className="df aic jc-center pt20">
            <div className="fz24 fwb" style={{ paddingBottom: 30 }}>
              Prisijungimas
            </div>
          </div>
          <div>
            <div className="w100p fz18 fwb pb10">Slapyvardis:</div>
            <input
              placeholder="username"
              type="text"
              className="w95p h40 p10 fz18 b-s1-grey bs-light"
              value={this.state.username}
              onChange={this.onUsernameChange}
            />
          </div>
          <div className="w100p pt20">
            <div className="w100p pb10 fz18 fwb">Slaptažodis:</div>
            <input
              placeholder="password"
              type="password"
              className="w95p h40 p10 fz18 b0 b-s1-grey bs-light"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </div>
          <div className="pt20">
            <button
              className="w100p h50 p10 fz18 bg-default cw fwb bs-light"
              onClick={this.handleClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
