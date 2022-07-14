import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='/'>Works</Link>
        </li>
        <li>
          <Link to='/'>Contact</Link>
        </li>
        <li>
          <Link to='/'>Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
