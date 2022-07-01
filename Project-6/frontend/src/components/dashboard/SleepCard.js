import React, { useState, useEffect } from 'react';
import styles from './SleepCard.module.css';
import axios from 'axios';
import { getYesterdayAndToday } from '../../functions/';

const SleepCard = () => {
  const getSleepData = async () => {
    const { yesterday, today } = getYesterdayAndToday();

    const {
      data: { data: data },
    } = await axios.get(
      `http://localhost:8000/api/v1/sleep-records/62ac627a6ca528974b72554d?sort=-wakeUpDate&wakeUpDate[lte]=${today.end}&wakeUpDate[gte]=${yesterday.start}`
    );

    let dataToSave = [];

    if (data.length === 0) dataToSave = [null, null];
    else if (data.length === 1) {
      if (data[0].wakeUpDate > today.start) dataToSave = [...data, null];
      else dataToSave = [null, ...data];
    } else dataToSave = [...data];

    setSleepData(dataToSave);
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
          {sleepData && sleepData[0] ? sleepData[0].stats.hours : '--'}
          <span>hrs</span>
        </p>
        <p className={styles.minutes}>
          {sleepData && sleepData[0]
            ? sleepData[0].stats.minutes.toString().padStart(2, '0')
            : '--'}
          <span>mins</span>
        </p>
      </div>

      <div className={styles.footer}>
        <div className={styles.yesterday}>
          <i>
            <ion-icon name='calendar-sharp'></ion-icon>
          </i>
          <p>
            {sleepData && sleepData[1] ? sleepData[1].stats.hours : '--'}
            <span> h</span>
          </p>
          <p>
            {sleepData && sleepData[1] ? sleepData[1].stats.minutes : '--'}
            <span> m</span>
          </p>
        </div>

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
