import React from "react";
import Home from "./home/Component";
import Office from "./office/Component";
import Trip from "./trip/Component";
import Profile from "./profile/Component";
import Stats from "./stats/Component";
import Login from "./login/Component";
import Register from "./registration/Component";
import ChangePassword from "./changePassword/Component";
import OfficeApartament from "./officeApartament/Component";
import NotFoundPage from "./404/Component";
import { Route, Switch } from "react-router";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        {this.props.isAuth && (
          <Route exact path="/office" render={() => <Office />} />
        )}
        {this.props.isAuth && (
          <Route exact path="/trip" render={() => <Trip />} />
        )}
        {this.props.isAuth && (
          <Route exact path="/profile" render={() => <Profile />} />
        )}
        {this.props.isAuth && (
          <Route exact path="/stats" render={() => <Stats />} />
        )}
        <Route exact path="/login" render={() => <Login />} />
        {this.props.isAuth && (
          <Route exact path="/register" render={() => <Register />} />
        )}
        {this.props.isAuth && (
          <Route
            exact
            path="/changePassword"
            render={() => <ChangePassword />}
          />
        )}
        {this.props.isAuth && (
          <Route exact path="/officeApt" render={() => <OfficeApartament />} />
        )}
        <Route render={() => <NotFoundPage />} />
      </Switch>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: !!state.user.isAuth
  };
};

export default connect(mapStateToProps)(App);
