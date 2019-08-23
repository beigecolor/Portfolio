import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./container/Signup";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" conponent={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
