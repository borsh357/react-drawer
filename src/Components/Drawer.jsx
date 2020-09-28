import React from 'react';
import PropTypes from 'prop-types';
import './Drawer.css';
import store from '../js/store';
import { view } from '@risingstack/react-easy-state';

function Drawer(props) {
  return (
    <div>
      <section
        className={store.drawerState.hidden ? 'drawer' : 'drawer drawer--show'}
      >
        {props.content}
      </section>
    </div>
  );
}

Drawer.propTypes = {
  content: PropTypes.element,
};

export default view(Drawer);
