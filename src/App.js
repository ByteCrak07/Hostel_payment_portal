import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//importing pages
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import History from "./Pages/History";
import Notfications from "./Pages/Notifications";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/history" exact component={History} />
          <Route path="/notifications" exact component={Notfications} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;