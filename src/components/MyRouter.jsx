import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Messages from "./Messages";
import Login from "./Login";

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/messages" component={Messages} />
        <Route path="/home" component={Home} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
}
