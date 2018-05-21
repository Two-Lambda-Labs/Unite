import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "shared/Header";
import Footer from "shared/Footer";

import HomeContainer from "areas/Home";

import "./style.css";

export default () => (
  <Router>
    <React.Fragment>
      <div className="app-container">
      <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  </Router>
);
