import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './SidebarItem.module.css';

const SidebarItem = ({ item }) => {
  const [expandAccordion, setExpandAccordion] = useState(false);
  const { pathname } = useLocation();

  let current;

  if (!item.subGroup) current = item.link.slice(1) === pathname.slice(1);
  else
    current =
      item.link.slice(1).split('/')[0] === pathname.slice(1).split('/')[0];

  const toggleAccordion = () => {
    if (item.subGroup) {
      setExpandAccordion(!expandAccordion);
    }
  };

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
