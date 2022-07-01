import React from 'react';
import styles from './DataStats.module.css';

const DataStats = ({ data }) => {
  const distance = (data.stats.distance / 1000).toFixed(2);
  const {
    stats: { timing },
  } = data;
  const hr = {
    avg: data.stats.heartRate.avg,
    max: data.stats.heartRate.max,
  };
  const elevation = {
    max: data.stats.elevation.maxElevation.toFixed(1),
    min: data.stats.elevation.minElevation.toFixed(1),
    totalAscent: data.stats.elevation.totalAscent.toFixed(1),
    totalDescent: data.stats.elevation.totalDescent.toFixed(1),
  };

  return (
    <div className={styles.container}>
      <h5>Stats</h5>

      <div className={styles.data}>
        <div className={styles['data-container']}>
          <h6>Distance</h6>
          <div className={styles['data-value']}>
            <p>{distance} km</p>
            <small>Distance</small>
          </div>
        </div>

        <div className={styles['data-container']}>
          <h6>Heart Rate</h6>
          <div className={styles['data-value']}>
            <p>{hr.avg} bpm</p>
            <small>Avg HR</small>
          </div>
          <div className={styles['data-value']}>
            <p>{hr.max} bpm</p>
            <small>Max HR</small>
          </div>
        </div>

        <div className={styles['data-container']}>
          <h6>Elevation</h6>
          <div className={styles['data-value']}>
            <p>{elevation.totalAscent} m</p>
            <small>Total Ascent</small>
          </div>
          <div className={styles['data-value']}>
            <p>{elevation.totalDescent} m</p>
            <small>Total Descent</small>
          </div>
          <div className={styles['data-value']}>
            <p>{elevation.min} m</p>
            <small>Min Elev</small>
          </div>
          <div className={styles['data-value']}>
            <p>{elevation.max} m</p>
            <small>Max Elev</small>
          </div>
        </div>

        <div className={styles['data-container']}>
          <h6>Calories</h6>
          <div className={styles['data-value']}>
            <p>{data.stats.calories}</p>
            <small>Calories</small>
          </div>
        </div>

        <div className={styles['data-container']}>
          <h6>Timing</h6>
          <div className={styles['data-value']}>
            <p>{timing.time}</p>
            <small>Time</small>
          </div>
          <div className={styles['data-value']}>
            <p>{timing.movingTime}</p>
            <small>Moving Time</small>
          </div>
          <div className={styles['data-value']}>
            <p>{timing.elapsedTime}</p>
            <small>Elapsed Time</small>
          </div>
          <div className={styles['data-value']}>
            <p>{timing.speed.avgSpeed} kph</p>
            <small>Avg Speed</small>
          </div>
          <div className={styles['data-value']}>
            <p>{timing.speed.avgMovingSpeed} kph</p>
            <small>Avg Moving Speed</small>
          </div>
          <div className={styles['data-value']}>
            <p>{timing.speed.maxSpeed} kph</p>
            <small>Max Speed</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStats;
