import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ logo, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <Link to='/'>
        <h1>
          <i className={logo}></i> {title}
        </h1>
      </Link>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Github Finder',
  logo: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Navbar;
