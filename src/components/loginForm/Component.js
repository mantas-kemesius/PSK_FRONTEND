import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

const URL = "http://localhost:8080/api/login";

class LoginForm extends React.Component {
  state = {
    username: "admin",
    password: "admin"
  };

  handleClick = () => {
    const formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);
    axios({
      method: "post",
      url: URL,
      data: formData,
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    }).then(res => {
      localStorage.setItem("jwt", res.data);
      localStorage.setItem(
        "user",
        JSON.stringify({ username: this.state.username })
      );
      this.props.history.push("/");
    });
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
        <div className="w30p mt10p">
          <input
            placeholder="username"
            type="text"
            className="w95p h40 p10 fz18 b-s1-grey"
            value={this.state.username}
            onChange={this.onUsernameChange}
          />
          <input
            placeholder="password"
            type="password"
            className="w95p h40 p10 fz18 b0 b-s1-grey"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />
          <button
            className="w100p h50 p10 fz18 bg-default cw fwb"
            onClick={this.handleClick}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
