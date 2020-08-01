import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//importing pages
import Home from './Pages/Home';
import Login_s from './Pages/Student/Login';
import Dashboard_s from './Pages/Student/Dashboard';
import Login_ad from './Pages/Admin/Login';
import Dashboard_ad from './Pages/Admin/Dashboard';

function App() {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login' exact component={Login_s} />
                    <Route path='/dashboard' exact component={Dashboard_s} />
                    <Route path='/admin/login' exact component={Login_ad} />
                    <Route path='/admin/dashboard' exact component={Dashboard_ad} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;