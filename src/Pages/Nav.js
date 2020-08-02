import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Nav.css';

function Nav() {
    return (
        <nav>
            Navbar
            <Link to='/login'>  Login</Link>
            <Link to='/profile'>    Profile</Link>
            <Link to='/history'>    History</Link>
            <Link to='/notifications'>  Notifications</Link>
        </nav>
    )
}

export default Nav