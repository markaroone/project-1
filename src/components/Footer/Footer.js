import React from 'react';
import styles from './Footer.module.css';

const socialsArr = [
  { href: '#', icon: 'logo-instagram' },
  { href: '#', icon: 'logo-facebook' },
  { href: '#', icon: 'logo-linkedin' },
  { href: '#', icon: 'logo-github' },
  { href: '#', icon: 'logo-gitlab' },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socials}>
        {socialsArr.map((el, i) => (
          <li key={i}>
            <a href={`${el.href}`}>
              <ion-icon name={`${el.icon}`}></ion-icon>
            </a>
          </li>
        ))}
      </ul>

      <p>Created by Mark Christian Fajardo - 2022</p>
    </footer>
  );
};

export default Footer;
