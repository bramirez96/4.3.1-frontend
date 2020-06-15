import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";
import Login from "../components/Login";
import Users from "../components/Users";
import Register from "../components/Register";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>
  );
}
