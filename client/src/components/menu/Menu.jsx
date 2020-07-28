import React from 'react';
import './Menu.scss';
import Nav from '../navigate/Nav';

const Menu = ({ isOpen, isOpenHandler }) => {
  return (
    <div className="nav-wrapper">
      <div
        className="menu-circle"
        onClick={isOpenHandler}
        style={{
          backgroundColor: isOpen ? '#e9c46a' : '#264653',
          transition: '0.3s transform',
        }}
      ></div>
      <Nav isOpen={isOpen} isOpenHandler={isOpenHandler} />
    </div>
  );
};

export default Menu;
