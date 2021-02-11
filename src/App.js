import React, { Component } from "react";
// import Navbar from "./Navbar"
import Admin from "./Container/Admin";
import Signup from "./Container/Signup";
import { Switch, Route, BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
