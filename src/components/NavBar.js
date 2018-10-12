import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="nav nav-wrapper deep-purple lighten-2">
      <div className="container">
        <Link to="/" className="brand-logo">React/Redux Random Users</Link>
        <ul className="right">
          <li>
            <NavLink to="/">New User</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar