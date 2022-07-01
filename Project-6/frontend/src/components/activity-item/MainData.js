import React from 'react';
import styles from './MainData.module.css';

const MainData = ({ activity }) => {
  const activityType = activity.activityType;

  const paceSpeed =
    activityType === 'cycling'
      ? {
          value: activity.stats.timing.speed.avgSpeed.toFixed(1),
          text: 'Speed',
          unit: 'kph',
        }
      : {
          value: activity.stats.timing.pace.avgPace,
          text: 'Pace',
          unit: '/km',
        };

  const distance = (activity.stats.distance / 1000).toFixed(2);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p>{distance} km</p>
        <small>Distance</small>
      </div>

      <div className={styles.item}>
        <p>{activity.stats.timing.time}</p>
        <small>Time</small>
      </div>

      <div className={styles.item}>
        <p>
          {paceSpeed.value} {paceSpeed.unit}
        </p>
        <small>Avg {paceSpeed.text}</small>
      </div>

      <div className={styles.item}>
        <p>{activity.stats.elevation.totalAscent} m</p>
        <small>Total Ascent</small>
      </div>
    </div>
  );
};

export default MainData;
