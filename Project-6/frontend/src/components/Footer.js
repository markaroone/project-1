import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <ul>
          <li>
            <a href='#'>Help</a>
          </li>
          <li>
            <a href='#'>Status</a>
          </li>
          <li>
            <a href='#'>Facebook</a>
          </li>
          <li>
            <a href='#'>Instagram</a>
          </li>
          <li>
            <a href='#'>Twitter</a>
          </li>
          <li>
            <a href='#'>Statement of Privacy</a>
          </li>
          <li>
            <a href='#'>Terms of Use</a>
          </li>
          <li>
            <a href='#'>Security</a>
          </li>
        </ul>

        <p>
          Uplift | Health is powered by Uplift • Copyright © 2016-2022 Uplift
          Ltd. or its subsidiaries • Version: 1.23.4.5, 22.06.01.100
        </p>
      </div>

      <button>Buy Uplift Gear</button>
    </footer>
  );
};

export default Footer;
