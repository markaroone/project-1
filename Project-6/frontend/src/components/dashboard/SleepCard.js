import React, { useState, useEffect } from 'react';
import styles from './SleepCard.module.css';
import { getDateRange } from '../../functions';
import axios from 'axios';

const SleepCard = () => {
  const getSleepData = async () => {
    const dateRangeToday = getDateRange(new Date());

    const {
      data: { data },
    } = await axios.get(
      `http://localhost:8000/api/v1/sleep-records/62ac627a6ca528974b72554d?sort=-date&limit=2&date[lt]=${dateRangeToday[1]}&date[gt]=${dateRangeToday[0]}`
    );

    setSleepData([...data]);
  };

  const [sleepData, setSleepData] = useState();

  useEffect(() => {
    getSleepData();
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <i>
          <ion-icon name='bed-sharp'></ion-icon>
        </i>
        <p>sleep</p>
      </div>

      <div className={styles.value}>
        <p className={styles.hours}>
          {sleepData ? sleepData[0].stats.hours : '--'}
          <span>hrs</span>
        </p>
        <p className={styles.minutes}>
          {sleepData
            ? sleepData[0].stats.minutes.toString().padStart(2, '0')
            : '--'}
          <span>m</span>
        </p>
      </div>

      <div className={styles.footer}>
        {!sleepData && <p>--</p>}

        {sleepData && (
          <div className={styles.yesterday}>
            <i>
              <ion-icon name='calendar-sharp'></ion-icon>
            </i>
            <p>
              {sleepData[1].stats.hours}
              <span> h</span>
            </p>
            <p>
              {sleepData[1].stats.minutes}
              <span> m</span>
            </p>
          </div>
        )}

        <button>
          See data&nbsp;
          <span>
            <ion-icon name='chevron-forward-sharp'></ion-icon>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SleepCard;
