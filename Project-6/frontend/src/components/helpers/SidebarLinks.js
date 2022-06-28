import React from 'react';
import styles from './SidebarLinks.module.css';
import { SidebarItem } from './index';

const SidebarLinks = ({ group, current }) => {
  return (
    <ul className={styles.ul}>
      {group.map((item, i) => {
        const isCurrent = item.name === current;
        return <SidebarItem item={item} key={i} current={isCurrent} />;
      })}
    </ul>
  );
};

export default SidebarLinks;
