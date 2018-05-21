import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Projects}></IndexRoute>
      <Route path="skills" component={Skills}></Route>
      <Route path="about" component={About}></Route>
    </Route>
  </Router>,
app);
