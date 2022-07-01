import React, { useState, useEffect } from 'react';
import styles from './HeartRateCard.module.css';
import axios from 'axios';
import { getStartEndToday } from '../../functions';

const HeartRateCard = () => {
  const getHeartRateData = async () => {
    const { start, end } = getStartEndToday();

    const {
      data: { data },
    } = await axios.get(
      `http://localhost:8000/api/v1/heart-rate-records/62ac627a6ca528974b72554d?sort=-date&date[lte]=${end}&date[gte]=${start}`
    );

    const dataToSet = data.length > 0 ? data.map((el) => el.result) : [];

    setHeartRateData(dataToSet);
  };

  const [heartRateData, setHeartRateData] = useState();

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
        <p>{heartRateData && heartRateData[0] ? heartRateData[0] : '--'}</p>
        <small>bpm</small>
      </div>

      <div className={styles.footer}>
        <div className={styles.difference}>
          {heartRateData && heartRateData.length > 1 && (
            <i>
              {
                <ion-icon
                  name={`caret-${
                    heartRateData[0] - heartRateData[1] > 0 ? 'up' : 'down'
                  }-circle-sharp`}
                ></ion-icon>
              }
            </i>
          )}
          <p>
            {heartRateData && heartRateData[1]
              ? Math.abs(heartRateData[1])
              : '--'}
            &nbsp;<span>bpm</span>
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

export default HeartRateCard;
