import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <Link to="/addperson">
          <li>create person</li>
        </Link>
        <Link to="/addcar">
          <li>create car</li>
        </Link>
        <Link to="/viewall">
          <li>view all person</li>
        </Link>
        <Link to="/info">
          <li>information</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
