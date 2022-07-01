import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './SidebarItem.module.css';
import SidebarContext from '../../context/sidebar-context';

const SidebarItem = ({ item }) => {
  const sidebarCtx = useContext(SidebarContext);

  // const [expandAccordion, setExpandAccordion] = useState(false);
  const { pathname } = useLocation();

  let current;

  if (!item.subGroup) current = item.link.slice(1) === pathname.slice(1);
  else
    current =
      item.link.slice(1).split('/')[0] === pathname.slice(1).split('/')[0];
  const linkToCheck = item.link.slice(1);

  const toggleAccordion = () => {
    // if (item.subGroup) {
    //   setExpandAccordion(!expandAccordion);
    // }

    if (linkToCheck === 'activities' && sidebarCtx.isActivitiesExpanded) {
      sidebarCtx.collapseActivities();
    } else if (
      linkToCheck === 'activities' &&
      !sidebarCtx.isActivitiesExpanded
    ) {
      sidebarCtx.expandActivities();
    } else if (
      linkToCheck === 'health-stats' &&
      sidebarCtx.isHealthStatsExpanded
    ) {
      sidebarCtx.collapseHealthStats();
    } else if (
      linkToCheck === 'health-stats' &&
      !sidebarCtx.isHealthStatsExpanded
    ) {
      sidebarCtx.expandHealthStats();
    }
  };

  const expandAccordion =
    (sidebarCtx.isHealthStatsExpanded && linkToCheck === 'health-stats') ||
    (sidebarCtx.isActivitiesExpanded && linkToCheck === 'activities');

  return (
    <li
      className={`${styles.li}  ${
        item.subGroup && expandAccordion && styles.open
      }`}
    >
      {!item.subGroup && (
        <Link to={item.link}>
          <div
            className={`${styles.title} ${styles[`${item.group}`]} ${
              current && styles.current
            }`}
            onClick={toggleAccordion}
          >
            <i className={styles.icon}>
              <ion-icon
                className={styles.icon}
                name={`${item.icon}`}
              ></ion-icon>
            </i>
            <p>{item.name}</p>
          </div>
        </Link>
      )}

      {item.subGroup && (
        <div
          className={`${styles.title} ${styles[`${item.group}`]} ${
            current && styles.current
          }`}
          onClick={toggleAccordion}
        >
          <i className={styles.icon}>
            <ion-icon className={styles.icon} name={`${item.icon}`}></ion-icon>
          </i>
          <p>{item.name}</p>
          {item.subGroup && (
            <i className={styles.chevron}>
              <ion-icon name='chevron-down-sharp'></ion-icon>
            </i>
          )}
        </div>
      )}

      {item.subGroup && (
        <ul className={styles.accordion}>
          {item.subGroups.map((el) => (
            <Link
              to={el.link}
              className={styles['sub-group__link']}
              key={el.link}
            >
              <li className={styles['sub-group']}>{el.name}</li>
            </Link>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
