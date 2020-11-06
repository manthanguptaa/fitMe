import React, { useEffect } from "react";
import { ToastProvider } from "react-toast-notifications";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Room from "./Room";
import LogPose from "./LogPose";
// import { GLITCH_SOCKET_HTTP_HOST } from "./constants";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <Router>
          <div className="App-container">
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/room/">
                <Room />
              </Route>
              <Route path="/pose/:imageName">
                <LogPose />
              </Route>
              <Route path="/">
                <div className="home">
                  <Link to="/">
                    <Room/>
                  </Link>
                </div>
               
              </Route>
            </Switch>
           
          </div>
        </Router>
      </ToastProvider>
    </div>
  );
}

export default App;
