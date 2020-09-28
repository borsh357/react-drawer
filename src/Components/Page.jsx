import React from 'react';
import PropTypes from 'prop-types';
import './Page.css';
import Hamburger from './Hamburger';
import Drawer from './Drawer';
import Menu from './Menu';

export default function Page(props) {
  return (
    <div className="page">
      <Hamburger />
      <Drawer content={<Menu />} />
      <h1 className="page-title">{props.title}</h1>
    </div>
  );
}

Page.propTypes = {
  title: PropTypes.string,
};
