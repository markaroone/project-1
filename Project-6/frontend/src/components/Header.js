import React from 'react';
import { useLocation } from 'react-router-dom';
import { getCurrentPageName } from '../functions/index';
import styles from './Header.module.css';

const Header = () => {
  const pageName = getCurrentPageName(useLocation().pathname) || 'Dashboard';

  return (
    <header className={styles.header}>
      <p className={styles.title}>{pageName}</p>

      <div className={styles.clickables}>
        <ul className={styles.icons}>
          <li>
            <button>
              <ion-icon name='add-sharp'></ion-icon>
            </button>
          </li>

          <li>
            <button>
              <ion-icon name='sync-sharp'></ion-icon>
            </button>
          </li>

          <li>
            <button>
              <ion-icon name='mail-sharp'></ion-icon>
            </button>
          </li>

          <li>
            <button>
              <ion-icon name='notifications-sharp'></ion-icon>
            </button>
          </li>
        </ul>

        <div className={styles.account}>
          <div className={styles['image-container']}>
            <img
              src='https://cdn-icons-png.flaticon.com/512/1458/1458201.png'
              alt='user image'
            />
          </div>
          <p>Markaroone</p>
          <button>
            <ion-icon name='chevron-down-sharp'></ion-icon>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
