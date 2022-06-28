import React from 'react';
import styles from './RecentActivity.module.css';
import { getCoordinates } from '../../functions/index';
import { Map } from '../ui/index';

const RecentActivity = ({ activity }) => {
  const activityCoords = getCoordinates(activity);
  const {
    activityType,
    stats: { distance },
    stats: {
      timing: {
        pace: { avgPace },
        speed: { avgSpeed },
      },
    },
  } = activity;

  return (
    <div className={`${styles.container} ${styles[`${activityType}`]}`}>
      <Map coords={activityCoords} />

      <div className={styles.stats}>
        <p className={styles['activity-type']}>{activityType}</p>
        <div className={styles.details}>
          <div className={styles.data}>
            <p className={styles.value}>
              {(distance / 1000).toFixed(1)} <span>km</span>
            </p>
            <p className={styles.name}>Distance</p>
          </div>
          {activityType === 'running' && (
            <div className={styles.data}>
              <p className={styles.value}>
                {avgPace} <span>/km</span>{' '}
              </p>
              <p className={styles.name}>Pace</p>
            </div>
          )}
          {activityType === 'cycling' && (
            <div className={styles.data}>
              <p className={styles.value}>
                {avgSpeed.toFixed(1)} <span>kph</span>
              </p>
              <p className={styles.name}>Speed</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
