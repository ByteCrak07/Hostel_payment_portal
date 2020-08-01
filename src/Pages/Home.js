import React from 'react'
import { Link } from 'react-router-dom';
import '../Assets/Styles/Home.css'

function Home() {
    return (
        <div className='Home'>
            <h1>Home Page</h1>
            <Link to='/login'><button>Login Student</button></Link>
            <Link to='/dashboard'><button>Dashboard Student</button></Link>
            <Link to='/admin/login'><button>Login Admin</button></Link>
            <Link to='/admin/dashboard'><button>Dashboard Admin</button></Link>
        </div>
    )
}

export default Home