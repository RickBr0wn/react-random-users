import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAPI } from '../actions/userActions'

const NavBar = props => {
  const handleClick = () => {
    props.onFetchAPI()
  }

  return (
    <nav className="nav nav-wrapper deep-purple darken-4">
      <div className="container">
        <Link to="/" className="brand-logo">React/Redux Random Users</Link>
        <ul className="right">
          <li className="highlight">
            <div onClick={handleClick}>New User</div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const mapActionsToProps = {
  onFetchAPI: fetchAPI
}

export default connect(null, mapActionsToProps)(NavBar)