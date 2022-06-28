import React from 'react';
import styles from './DashboardCard.module.css';

const DashboardCard = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default DashboardCard;
