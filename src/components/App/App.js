import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Feather, FeatherContext } from "feather-client-react";
import SignIn from "../SignIn";
import VerifySignIn from "../VerifySignIn";
import "./App.css";

function App() {
  const apiKey = "pk_test_D34lV7gYji7AzdJKp6gEm3hkfEy0raTT";
  const config = { host: "localhost", port: "8080", protocol: "http" };
  const feather = Feather(apiKey, config);

  feather.onStateChange((session, user) => {
    console.log("On state change: ");
    console.log(session);
    console.log(user);
  });

  return (
    <FeatherContext.Provider value={feather}>
      <Router>
        <div className="App">
          <Route exact path={"/"} component={SignIn} />
          <Route exact path={"/v"} component={VerifySignIn} />
        </div>
      </Router>
    </FeatherContext.Provider>
  );
}

export default App;
