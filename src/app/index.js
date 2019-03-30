import React from "react";
import Home from "./home/Component";
import NotFoundPage from "./404/Component";
import { Route, Switch } from "react-router";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route render={() => <NotFoundPage />} />
      </Switch>
    );
  }
}

export default App;
