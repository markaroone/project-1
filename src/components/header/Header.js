import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import Menu from './Menu';
import useWidth from '../../hooks/useWidth';
import styles from './Header.module.css';
import resume from '../../assets/documents/Fajardo-Christian-Web-Developer.pdf';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation().pathname.slice(1);
  const screenWidth = useWidth();
  // const linksArr = ['', 'about', 'projects', 'contact'];
  const linksArr = ['', 'about', 'projects'];

  const dowloadResumeHandler = () => {
    window.location.href = `${__dirname}/../../assets/documents/Fajardo-Christian-Web-Developer.pdf`;
  };

  const hamburgerMenuBtn = (width) => {
    if (width < 992)
      return (
        <button
          className={styles['burger-menu__btn']}
          onClick={toggleMenuHandler}
        >
          <ion-icon name='menu-sharp'></ion-icon>
        </button>
      );
  };

  const navigation = (width) => {
    if (width >= 992) {
      return (
        <ul className={styles.links}>
          {linksArr.map((el, i) => {
            const name = el === '' ? 'home' : el;
            const active = location === el ? styles['active'] : '';
            return (
              <li key={i} className={`${active}`}>
                <Link to={`/${el.toLowerCase()}`}>{name}</Link>
              </li>
            );
          })}
          {/* <button className={styles.resume} onClick={dowloadResumeHandler}>
            Resume
          </button> */}
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
    }
  };

  const toggleMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className={styles.header}>
        <p className={styles.logo}>MC.</p>

        {hamburgerMenuBtn(screenWidth)}
        {navigation(screenWidth)}
      </header>

      {showMenu &&
        screenWidth < 992 &&
        ReactDOM.createPortal(
          <Menu hideMenu={toggleMenuHandler} />,
          document.getElementById('overlays-root')
        )}
    </>
  );
};

export default Header;
