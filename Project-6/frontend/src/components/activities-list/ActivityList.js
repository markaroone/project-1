import React from 'react';
import { ActivityListItem } from './';
import styles from './ActivityList.module.css';

const ActivityList = ({ activities }) => {
  return (
    <ul className={styles.list}>
      {activities &&
        activities.map((activity) => (
          <ActivityListItem key={activity._id} activity={activity} />
        ))}
    </ul>
  );
};

export default ActivityList;
