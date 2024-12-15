import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
            <Link className='header-title' to="/">organizer</Link>
        <nav className='header-nav'>
            <Link className='header-nav-link' to="/login">Login</Link>
            {/* <Link className='header-nav-link' to="/panel">Panel</Link> */}
        </nav>
    </div>
  )
}

export default Header