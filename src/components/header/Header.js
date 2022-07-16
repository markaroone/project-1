import React from 'react';
import { Logo } from '../index';
import Navigation from './Navigation';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <button>Resume</button>
    </header>
  );
};

export default Header;
