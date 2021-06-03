import { NavLink } from "react-router-dom";
import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm -navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/public" className="nav-link">Public</NavLink>
            </li>
          </ul>
        </nav>
    )
}
