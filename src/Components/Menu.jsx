import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import { hideDrawer } from '../js/actions';

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink
            to="/dashboard"
            className="menu-link"
            activeClassName="menu-link--active"
            onClick={hideDrawer}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className="menu-link"
            activeClassName="menu-link--active"
            onClick={hideDrawer}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className="menu-link"
            activeClassName="menu-link--active"
            onClick={hideDrawer}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
