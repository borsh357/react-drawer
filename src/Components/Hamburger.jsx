import React from 'react';
import { toggleDrawer } from '../js/actions';
import store from '../js/store';
import './Hamburger.css';
import { view } from '@risingstack/react-easy-state';

function Hamburger() {
  return (
    <div
      className={
        store.drawerState.hidden ? 'hamburger' : 'hamburger hamburger--collapse'
      }
      onClick={toggleDrawer}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default view(Hamburger);
