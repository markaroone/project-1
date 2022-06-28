import React, { useState, useEffect } from 'react';
import styles from './HydrationCard.module.css';
import axios from 'axios';
import { getDateRange } from '../../functions';

const HydrationCard = () => {
  const getHydrationData = async () => {
    const {
      data: { data },
    } = await axios.get(
      `http://localhost:8000/api/v1/hydration-records/62ac627a6ca528974b72554d?sort=-date&limit=1`
    );
    setHydrationData(data[0]);
  };

  const increaseHydrationData = async () => {
    try {
      await axios.patch(
        `http://localhost:8000/api/v1/hydration-records/${hydrationData._id}`,
        { amount: hydrationData.amount + 250 }
      );

      getHydrationData();
    } catch (err) {
      console.error(err);
    }
  };

  const decreaseHydrationData = async () => {
    try {
      if (hydrationData.amount < 250) return;

      await axios.patch(
        `http://localhost:8000/api/v1/hydration-records/${hydrationData._id}`,
        { amount: hydrationData.amount - 250 }
      );

      getHydrationData();
    } catch (err) {
      console.error(err);
    }
  };

  const [hydrationData, setHydrationData] = useState();

  useEffect(() => {
    getHydrationData();
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <i>
          <ion-icon name='water-sharp'></ion-icon>
        </i>
        <p>water</p>
      </div>

      <div className={styles.value}>
        <button onClick={decreaseHydrationData}>
          <ion-icon name='remove-sharp'></ion-icon>
        </button>

        <p className={styles.water}>
          {hydrationData ? hydrationData.amount.toLocaleString('en-us') : '--'}
          <span> ml</span>
        </p>

        <button onClick={increaseHydrationData}>
          <ion-icon name='add-sharp'></ion-icon>
        </button>
      </div>

      <div className={styles.footer}>
        {!hydrationData && (
          <div className={styles.goal}>
            <p>
              -- &nbsp;<span>ml</span>
            </p>
          </div>
        )}

        {hydrationData && (
          <div className={styles.goal}>
            <i>
              <ion-icon name='trophy-sharp'></ion-icon>
            </i>
            <p>
              {hydrationData.amount.toLocaleString('en-us')}
              &nbsp;<span>/ 2,000 ml</span>
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

export default HydrationCard;
