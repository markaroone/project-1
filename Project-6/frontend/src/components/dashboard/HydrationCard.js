import React, { useState, useEffect } from 'react';
import styles from './HydrationCard.module.css';
import axios from 'axios';
import { getStartEndToday } from '../../functions';

const HydrationCard = () => {
  const getHydrationData = async () => {
    try {
      const { start, end } = getStartEndToday();

      const {
        data: { data },
      } = await axios.get(
        `http://localhost:8000/api/v1/hydration-records/62ac627a6ca528974b72554d?sort=-date&limit=1&date[gte]=${start}&date[lte]=${end}`
      );

      let dataToSend = {
        id: null,
        amount: 0,
      };

      if (!data.length) {
        const now = new Date();

        const responseData = await axios.post(
          `http://localhost:8000/api/v1/hydration-records`,
          {
            userId: '62ac627a6ca528974b72554d',
            id: now.toISOString().slice(0, 10),
            date: now,
            amount: 0,
          }
        );
      }

      if (data.length > 0) {
        dataToSend.id = data[0]._id;
        dataToSend.amount = data[0].amount;
      }

      setHydrationData(dataToSend);
    } catch (err) {
      console.error(err);
    }
  };

  const increaseHydrationData = async () => {
    /* 
    TODO: Create data only when increase/decrease button is pressed so that no unnecessary data is created.
    */
    try {
      if (!hydrationData) return;

      await axios.patch(
        `http://localhost:8000/api/v1/hydration-records/${hydrationData.id}`,
        { amount: hydrationData.amount + 250 }
      );

      setHydrationData({
        ...hydrationData,
        amount: hydrationData.amount + 250,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const decreaseHydrationData = async () => {
    /* 
    TODO: Create data only when increase/decrease button is pressed so that no unnecessary data is created.
    */
    try {
      if (!hydrationData || hydrationData.amount < 250) return;

      const newAmount = hydrationData.amount - 250;

      await axios.patch(
        `http://localhost:8000/api/v1/hydration-records/${hydrationData.id}`,
        { amount: newAmount }
      );

      setHydrationData({
        ...hydrationData,
        amount: newAmount,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const [hydrationData, setHydrationData] = useState();

  useEffect(() => {
    getHydrationData(hydrationData);
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
