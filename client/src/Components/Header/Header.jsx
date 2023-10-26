import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <Link to="/">
            <img src="./logo.png" alt="logo" width={100} />
            </Link>

            <div className="flexCenter h-menu">
                <NavLink to="/properties">Properties</NavLink>
                <a href='mailto:munu5031.goswami@gmail.com'>Contact</a>
                <button className="button">
                  <NavLink to="/login">Login</NavLink>
                </button>

            </div>
        </div>
    </div>
  )
}

export default Header;