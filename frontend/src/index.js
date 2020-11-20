import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import "./index.css";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

//import App from './App';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={Home} exact={true} />
    <Route path="/login" component={Login} exact={true} />
    <Route path="/register" component={Register} exact={true} />
  </Router>,
  document.getElementById("root")
);
