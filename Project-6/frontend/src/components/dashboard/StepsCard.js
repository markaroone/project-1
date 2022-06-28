import React, { useState, useEffect } from 'react';
import styles from './StepsCard.module.css';
import axios from 'axios';
import { getDateRangeToday } from '../../functions';

const StepsCard = () => {
  const getStepsData = async () => {
    const dateRangeToday = getDateRangeToday();

    const {
      data: { data },
    } = await axios.get(
      `http://localhost:8000/api/v1/step-records/62ac627a6ca528974b72554d?sort=-date&limit=2&date[lt]=${dateRangeToday[1]}&wakeUpDate[gt]=${dateRangeToday[0]}`
    );

    setStepsData(data);
  };

  const [stepsData, setStepsData] = useState();

  useEffect(() => {
    getStepsData();
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <i>
          <ion-icon name='footsteps-sharp'></ion-icon>
        </i>
        <p>steps</p>
      </div>

      <div className={styles.value}>
        <p className={styles.steps}>
          {stepsData ? stepsData[0].steps.toLocaleString() : '--'}
          <span>/10k</span>
        </p>
      </div>

      <div className={styles.footer}>
        {!stepsData && (
          <div className={styles.yesterday}>
            <p>
              -- &nbsp;<span>steps</span>
            </p>
          </div>
        )}

        {stepsData && (
          <div className={styles.yesterday}>
            <i>
              <ion-icon name='footsteps-sharp'></ion-icon>
            </i>
            <p>
              {stepsData[1].steps.toLocaleString('en-us')}
              &nbsp;<span>steps</span>
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

export default StepsCard;
