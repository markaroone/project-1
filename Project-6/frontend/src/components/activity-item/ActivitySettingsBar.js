import React from 'react';
import styles from './ActivitySettingsBar.module.css';

const ActivitySettingsBar = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.heart}>
        <button>
          <ion-icon name='heart-sharp'></ion-icon>
        </button>
        <small>3 likes</small>
      </li>
      <li>
        <button>
          <ion-icon name='pencil-sharp'></ion-icon>
        </button>
      </li>
      <li>
        <button>
          <ion-icon name='star-sharp'></ion-icon>
        </button>
      </li>
      <li>
        <button>
          <ion-icon name='share-social-sharp'></ion-icon>
        </button>
      </li>
      <li>
        <button>
          <ion-icon name='lock-closed-sharp'></ion-icon>
        </button>
      </li>
      <li>
        <button>
          <ion-icon name='settings-sharp'></ion-icon>
        </button>
      </li>
    </ul>
  );
};

export default ActivitySettingsBar;
