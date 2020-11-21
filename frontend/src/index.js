import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import "./index.css";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";

const history = createBrowserHistory();

ReactDOM.render(
  <MuiPickersUtilsProvider utils={LuxonUtils}>
    <Router history={history}>
      <Route path="/" component={Home} exact={true} />
      <Route path="/login" component={Login} exact={true} />
      <Route path="/register" component={Register} exact={true} />
    </Router>
  </MuiPickersUtilsProvider>,
  document.getElementById("root")
);
