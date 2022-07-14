import React from 'react';
import { Logo } from './index';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <p>Designed &#38; Created by Christian Fajardo</p>
    </footer>
  );
};

export default Footer;
