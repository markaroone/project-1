import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';
import resume from '../../assets/documents/Fajardo-Christian-Web-Developer.pdf';

const Menu = ({ hideMenu }) => {
  const location = useLocation().pathname.slice(1);
  // const linksArr = ['', 'about', 'projects', 'contact'];
  const linksArr = ['', 'about', 'projects'];

  const navigation = () => (
    <ul className={styles.links}>
      {linksArr.map((el, i) => {
        const name = el === '' ? 'home' : el;
        const active = location === el ? styles['active'] : '';
        return (
          <li key={i} className={`${active}`}>
            <Link to={`/${el.toLowerCase()}`} onClick={hideMenu}>
              {name}
            </Link>
          </li>
        );
      })}

      <a
        className={styles.resume}
        href={resume}
        download='Fajardo-Mark-Christian-Web-Developer'
        target='_blank'
      >
        Resume
      </a>
    </ul>
  );

  return (
    <nav className={styles.menu}>
      <button className={styles['close-menu__btn']} onClick={hideMenu}>
        <ion-icon name='close-sharp'></ion-icon>
      </button>

      {/* <p className={styles.logo}>MC.</p> */}

      {navigation()}

      <ul className={styles.socials}>
        <li>
          <a href='#'>
            <ion-icon name='logo-instagram'></ion-icon>
          </a>
        </li>
        <li>
          <a href='#'>
            <ion-icon name='logo-facebook'></ion-icon>
          </a>
        </li>
        <li>
          <a href='#'>
            <ion-icon name='logo-linkedin'></ion-icon>
          </a>
        </li>
        <li>
          <a href='#'>
            <ion-icon name='logo-github'></ion-icon>
          </a>
        </li>
        <li>
          <a href='#'>
            <ion-icon name='logo-gitlab'></ion-icon>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
