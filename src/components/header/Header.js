import React from 'react';
import { Logo } from '../index';
import { Navigation, Socials } from './index';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <Socials />
    </header>
  );
};

export default Header;
