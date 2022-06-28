import React from 'react';
import styles from './Sidebar.module.css';
import { sidebarData } from '../data/index';
import { SidebarLinks } from './helpers/index';

const Sidebar = () => {
  const data = sidebarData;
  return (
    <nav className={styles.section}>
      <p className={styles.logo}>
        uplift
        <span> | health</span>
      </p>

      <div className={styles.links}>
        {data.map((group, i) => {
          return <SidebarLinks group={group} key={i} current={'activities'} />;
        })}
      </div>
    </nav>
  );
};

export default Sidebar;
