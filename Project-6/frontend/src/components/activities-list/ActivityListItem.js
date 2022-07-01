import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ActivityListItem.module.css';

const ActivityListItem = ({ activity }) => {
  const id = activity._id;
  const activityType = activity.activityType;
  const activityIcon = activityType === 'cycling' ? 'bicycle' : 'footsteps';

  const paceSpeed =
    activityType === 'cycling'
      ? {
          value: activity.stats.timing.speed.avgSpeed.toFixed(1),
          text: 'speed',
          unit: 'kph',
        }
      : {
          value: activity.stats.timing.pace.avgPace,
          text: 'pace',
          unit: '/km',
        };

  const startDate = new Date(activity.date.start).toDateString().split(' ');
  const month = startDate[1];
  const date = startDate[2];
  const year = startDate[3];

  const distance = (activity.stats.distance / 1000).toFixed(2);

  return (
    <li className={styles.item}>
      <div className={styles.date}>
        <i className={styles['activity-icon']}>
          <ion-icon name={`${activityIcon}-sharp`}></ion-icon>
        </i>

        <div>
          <p className={styles['month-day']}>
            {month}&nbsp;{date}
          </p>
          <p className={styles.year}>{year}</p>
        </div>

        <button>
          <ion-icon name='star-sharp'></ion-icon>
        </button>
      </div>

      <div className={styles.name}>
        <Link to={`/activities/${activityType}/${id}`}>{activity.name}</Link>
        <small>{activityType}</small>
      </div>

      <div className={styles.title}>
        <p>{distance}&nbsp;km</p>
        <small>distance</small>
      </div>

      <div className={styles.title}>
        <p>{activity.stats.timing.time}</p>
        <small>time</small>
      </div>

      <div className={styles.title}>
        <p>
          {paceSpeed.value}&nbsp;{paceSpeed.unit}
        </p>
        <small>avg {paceSpeed.text}</small>
      </div>

      <div className={styles.title}>
        <p>{activity.stats.elevation.totalAscent}&nbsp;m</p>
        <small>total ascent</small>
      </div>

      <div className={styles.title}>
        <p>{activity.stats.heartRate.avg}&nbsp;bpm</p>
        <small>avg hr</small>
      </div>
    </li>
  );
};

export default ActivityListItem;
