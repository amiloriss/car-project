import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
const Nav = ({ isOpenHandler, isOpen }) => {
  return (
    <nav
      className="navigate"
      style={{
        transform: isOpen ? 'translate(0px)' : 'translate(-570px)',
        opacity: isOpen ? 1 : 0,
      }}
    >
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
        <Link to="/">
          <li onClick={isOpenHandler}>information</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
