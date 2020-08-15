import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//importing pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard"

function App() {
    return   (  
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );  
}   

export default App;