import React from 'react';
import './Drawer.css';
import { drawerState } from '../js/store';
import { toggleDrawer } from '../js/actions';
import { view } from '@risingstack/react-easy-state';
import { Link } from 'react-router-dom';

class Drawer extends React.Component {
  render() {
    return (
      <section class="drawer">
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
              <Link to="/dashboard">
                <li>Dashboard</li>
              </Link>
              <Link to="/profile">
                <li>Profile</li>
              </Link>
              <Link to="/settings">
                <li>Settings</li>
              </Link>
            </ul>
          </div>
        </nav>
      </section>
    );
  }
}
export default view(Drawer);
