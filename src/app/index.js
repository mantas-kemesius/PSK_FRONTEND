import React from "react";
import Home from "./home/Component";
import Office from "./office/Component";
import Trip from "./trip/Component";
import Stats from "./stats/Component";
import Login from "./login/Component";
import NotFoundPage from "./404/Component";
import { Route, Switch } from "react-router";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/office" render={() => <Office />} />
        <Route exact path="/trip" render={() => <Trip />} />
        <Route exact path="/stats" render={() => <Stats />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route render={() => <NotFoundPage />} />
      </Switch>
    );
  }
}

export default App;
