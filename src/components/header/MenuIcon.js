import React from 'react';
import styles from './MenuIcon.module.css';

const MenuIcon = () => {
  return (
    <div className={styles.demo}>
      <div className={styles['menu-icon']}>
        <input className={styles['menu-icon__checkbox']} type='checkbox' />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default MenuIcon;
