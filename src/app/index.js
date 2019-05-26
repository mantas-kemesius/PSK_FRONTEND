import React from "react";
import Home from "./home/Component";
import Office from "./office/Component";
import Trip from "./trip/Component";
import Profile from "./profile/Component";
import Stats from "./stats/Component";
import Login from "./login/Component";
import Register from "./registration/Component";
import ChangePassword from "./changePassword/Component";
import NotFoundPage from "./404/Component";
import { Route, Switch } from "react-router";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/office" render={() => <Office />} />
        <Route exact path="/trip" render={() => <Trip />} />
        <Route exact path="/profile" render={() => <Profile />} />
        <Route exact path="/stats" render={() => <Stats />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/changePassword" render={() => <ChangePassword />} />
        <Route render={() => <NotFoundPage />} />
      </Switch>
    );
  }
}

export default App;
