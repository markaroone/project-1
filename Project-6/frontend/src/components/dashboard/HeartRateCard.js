import React, { useState, useEffect } from 'react';
import styles from './HeartRateCard.module.css';
import axios from 'axios';
import { getDateRangeToday } from '../../functions';

const HeartRateCard = () => {
  const getHeartRateData = async () => {
    const dateRangeToday = getDateRangeToday();

    const {
      data: { data },
    } = await axios.get(
      `http://localhost:8000/api/v1/heart-rate-records/62ac627a6ca528974b72554d?sort=-date&limit=2&date[lt]=${dateRangeToday[1]}&wakeUpDate[gt]=${dateRangeToday[0]}`
    );

    const heartRateArr = data.map((el) => el.result);
    const difference = heartRateArr[0] - heartRateArr[1];

    setHeartRateData({
      arr: heartRateArr,
      difference,
    });
  };

  const [heartRateData, setHeartRateData] = useState({
    arr: ['--', '--'],
    difference: null,
  });

  useEffect(() => {
    getHeartRateData();
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <i>
          <ion-icon name='heart-sharp'></ion-icon>
        </i>
        <p>heart rate</p>
      </div>

      <div className={styles.value}>
        <p>{heartRateData.arr[0]}</p>
        <small>bpm</small>
      </div>

      <div className={styles.footer}>
        {!heartRateData.difference && (
          <div className={styles.difference}>
            <p>
              -- &nbsp;<span>bpm</span>
            </p>
          </div>
        )}

        {heartRateData.difference && (
          <div className={styles.difference}>
            <i>
              {
                <ion-icon
                  name={`caret-${
                    heartRateData.difference > 0 ? 'up' : 'down'
                  }-circle-sharp`}
                ></ion-icon>
              }
            </i>
            <p>
              {Math.abs(heartRateData.arr[1])}
              &nbsp;<span>bpm</span>
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

export default HeartRateCard;
