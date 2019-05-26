import React from "react";

class RegisterForm extends React.Component {
  state = {
    username: "",
    password: "",
    name: "",
    lastName: "",
    email: "",
    role1: false,
    role2: false,
    role3: false
  };

  handleClick = () => {
    const { role1, role2, role3 } = this.state;
    const userRoleEnumList = [];
    if (role1) userRoleEnumList.push("EMPLOYEE");
    if (role2) userRoleEnumList.push("ADMINISTRATOR");
    if (role3) userRoleEnumList.push("ORGANIZATOR");
    this.props.handleClick({ ...this.state, userRoleEnumList });
  };
  onNameChange = e => {
    this.setState({ name: e.target.value });
  };

  onLastnameChange = e => {
    this.setState({ lastName: e.target.value });
  };

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  render() {
    console.log(this.state);
    return (
      <div className="w100p df aic jc-center">
        <div className="w30p mt10p">
          <h2>Vartotojų pridėjimas</h2>
          <input
            placeholder="Vardas"
            type="text"
            className="w95p h40 p10 fz18 b-s1-grey"
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <input
            placeholder="Pavardė"
            type="text"
            className="w95p h40 p10 fz18 b-s1-grey"
            value={this.state.lastName}
            onChange={this.onLastnameChange}
          />
          <input
            placeholder="Email"
            type="email"
            className="w95p h40 p10 fz18 b-s1-grey"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
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
          <div>
            <input
              type="checkbox"
              onChange={e => {
                this.setState({
                  role1: e.target.checked
                });
              }}
            />{" "}
            <label>EMPLOYEE</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={e => {
                this.setState({
                  role2: e.target.checked
                });
              }}
            />{" "}
            <label>ADMINISTRATOR</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={e => {
                this.setState({
                  role3: e.target.checked
                });
              }}
            />{" "}
            <label>ORGANIZATOR</label>
          </div>
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
