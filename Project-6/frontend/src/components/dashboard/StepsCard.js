import React, { useState, useEffect } from 'react';
import styles from './StepsCard.module.css';
import axios from 'axios';

import { getYesterdayAndToday } from '../../functions';

const StepsCard = () => {
  const getStepsData = async () => {
    const { yesterday, today } = getYesterdayAndToday();

    const {
      data: { data },
    } = await axios.get(
      `http://localhost:8000/api/v1/step-records/62ac627a6ca528974b72554d?sort=-date&date[lte]=${today.end}&date[gte]=${yesterday.start}`
    );

    let dataToSave = [];

    if (data.length === 0) dataToSave = [null, null];
    else if (data.length === 1) {
      if (data[0].date > today.start) dataToSave = [...data, null];
      else dataToSave = [null, ...data];
    } else dataToSave = [...data];

    setStepsData(dataToSave);
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
          {stepsData && stepsData[0] ? stepsData[0].steps.toLocaleString() : 0}
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

        <div className={styles.yesterday}>
          <i>
            <ion-icon name='footsteps-sharp'></ion-icon>
          </i>
          <p>
            {stepsData && stepsData[1]
              ? stepsData[1].steps.toLocaleString('en-us')
              : 0}
            &nbsp;<span>steps</span>
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

export default StepsCard;
