import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';

const Menu = ({ isOpen, isOpenHandler }) => {
  return (
    <div className="nav-wrapper">
      <div
        className="menu-circle"
        onClick={isOpenHandler}
        style={{
          backgroundColor: isOpen ? '#e9c46a' : '#264653',
          transform: isOpen ? 'translateX(100%)' : 'translateX(0%)',
          transition: '0.3s transform',
        }}
      ></div>
      {isOpen ? (
        <nav className="navigate">
          <ul>
            <Link to="/addperson">
              <li onClick={isOpenHandler}>create person</li>
            </Link>
            <Link to="/addcar">
              <li onClick={isOpenHandler}>create car</li>
            </Link>
            <Link to="/viewall">
              <li onClick={isOpenHandler}>view all person</li>
            </Link>
            <Link to="/info">
              <li onClick={isOpenHandler}>information</li>
            </Link>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default Menu;
