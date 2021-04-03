import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Operators from "./components/operators";
import PayScreen from "./components/pay-screen";
import Footer from "./components/footer";
import InputMask from "./components/mask";

export default function App() {
  return (
      <Router>
        <div className="container__page">
          <div className="container__content">
            <Switch>
              <Route path="/:operator">
                <PayScreen />
              </Route>
              <Route path="/">
                <Operators />
              </Route>
            </Switch>
          </div>
          <InputMask />
          <Footer />
        </div>
      </Router>
  );
}
