import React from 'react';
import './Drawer.css';
import { drawerState } from '../js/store';
import { toggleDrawer } from '../js/actions';
import { view } from '@risingstack/react-easy-state';
import { NavLink } from 'react-router-dom';

class Drawer extends React.Component {
  render() {
    return (
      <section className="drawer">
        <nav role="navigation">
          <div
            id="drawerToggler"
            className={drawerState.hidden ? '' : 'drower--show'}
            onClick={toggleDrawer}
          >
            <span></span>
            <span></span>
            <span></span>
            <ul>
              <NavLink to="/dashboard" activeClassName="drawer--activelink">
                <li>Dashboard</li>
              </NavLink>
              <NavLink to="/profile" activeClassName="drawer--activelink">
                <li>Profile</li>
              </NavLink>
              <NavLink to="/settings" activeClassName="drawer--activelink">
                <li>Settings</li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </section>
    );
  }
}
export default view(Drawer);
