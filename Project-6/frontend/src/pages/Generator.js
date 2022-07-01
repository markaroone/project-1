import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { GeneralPageTemplate } from '../components/ui/index';
import styles from './Generator.module.css';
import {
  sleepGenerator,
  heartRateRecordGenerator,
  stepsGenerator,
  stepsRecordUpdate,
  hydrationGenerator,
  hydrationRecordUpdate,
  weightGenerator,
  weightRecordUpdate,
} from '../generators/generator';

const Generator = () => {
  const postNewSleepRecord = async (date, value) => {
    const data = await sleepGenerator(date, '62ac627a6ca528974b72554d');

    const result = await axios.post(
      'http://localhost:8000/api/v1/sleep-records',
      data
    );

    console.log(result);
  };

  const postNewHeartRateRecord = async (date, value) => {
    const data = await heartRateRecordGenerator(
      date,
      '62ac627a6ca528974b72554d'
    );

    const result = await axios.post(
      'http://localhost:8000/api/v1/heart-rate-records',
      data
    );

    console.log(result);
  };

  const postNewStepsRecord = async (date, value) => {
    const data = stepsGenerator(date, '62ac627a6ca528974b72554d');

    const data2 = [];

    for (let i = 20; i < 29; i++)
      data2.push(stepsGenerator(`2022-06-${i}`, '62ac627a6ca528974b72554d'));

    console.log(data);

    const results = await axios.post(
      'http://localhost:8000/api/v1/step-records',
      data
    );

    console.log(results);
  };

  const updateStepsRecord = async (date, value) => {
    const data = stepsRecordUpdate();

    const result = await axios.patch(
      'http://localhost:8000/api/v1/step-records/62b9a4b3a385ed9bdb9c07d1',
      data
    );

    console.log(result);
  };

  const postNewHydrationRecord = async (date, value) => {
    const data = hydrationGenerator(date, '62ac627a6ca528974b72554d');

    let data2 = [];

    for (let i = 21; i < 29; i++) {
      data2.push(
        hydrationGenerator(`2022-06-${i}`, '62ac627a6ca528974b72554d')
      );
    }

    console.log(data);

    const results = await axios.post(
      'http://localhost:8000/api/v1/hydration-records',
      data2
    );

    console.log(results);
  };

  const updateHydrationRecord = async (date, value) => {
    const data = hydrationRecordUpdate();

    const result = await axios.patch(
      'http://localhost:8000/api/v1/hydration-records/62b9ba589d8814e90b8be935',
      data
    );

    console.log(result);
  };

  const postNewWeightRecord = async (date, value = 68) => {
    const data = weightGenerator(date, value, '62ac627a6ca528974b72554d');

    const result = await axios.post(
      'http://localhost:8000/api/v1/weight-records',
      data
    );

    console.log(result);
  };

  const updateWeightRecord = async (date, value) => {
    const data = weightRecordUpdate(72);
    const result = await axios.patch(
      'http://localhost:8000/api/v1/weight-records/62b9c153c23583e59f19c19c',
      data
    );

    console.log(result);
  };

  const testMoment = () => {
    const today = moment().weekday(1);
    const weekStart = today.startOf('week').toString();
    const weekEnd = today.endOf('week').toString();

    const dayStart = moment().startOf('day').toISOString();
    const dayEnd = moment().endOf('day').toISOString();

    console.log(dayStart);
    console.log(dayEnd);
    console.log(moment().endOf('day').toString());

    // console.log(weekStart);
    // console.log(weekEnd);
  };

  const [date, setDate] = useState();
  const [value, setValue] = useState();

  const changeDateHandler = (e) => {
    setDate(e.target.value);
  };

  const changeValueHandler = (e) => {
    setValue(e.target.value);
  };

  // useEffect(() => {
  //   value && console.log(value);
  //   date && console.log(date);
  // }, [value, date]);

  return (
    <GeneralPageTemplate>
      <div className={styles.container}>
        <form action=''>
          <input
            className={styles.dateInput}
            onChange={changeDateHandler}
            type='date'
          />

          <input
            className={styles.numberInput}
            onChange={changeValueHandler}
            type='number'
          />
        </form>
        <div className={styles.btns}>
          <button
            className={styles.hr}
            onClick={() => {
              postNewHeartRateRecord(date, value);
            }}
          >
            heart rate generator
          </button>

          <button
            className={styles.sleep}
            onClick={() => {
              postNewSleepRecord(date, value);
            }}
          >
            sleep generator
          </button>

          <button
            className={styles.fluids}
            onClick={() => {
              postNewHydrationRecord(date, value);
            }}
          >
            fluids generator
          </button>

          {/* <button className={styles.fluids} onClick={updateHydrationRecord}>
            update fluids generator
          </button> */}

          <button
            className={styles.steps}
            onClick={() => {
              postNewStepsRecord(date, value);
            }}
          >
            steps generator
          </button>

          {/* <button className={styles.steps} onClick={updateStepsRecord}>
            update steps generator
          </button> */}

          <button
            className={styles.steps}
            onClick={() => {
              postNewWeightRecord(date, value);
            }}
          >
            weight generator
          </button>

          {/* <button className={styles.steps} onClick={updateWeightRecord}>
            update weight generator
          </button> */}

          {/* <button className={styles.steps} onClick={testMoment}>
            test moment
          </button> */}
        </div>
      </div>
    </GeneralPageTemplate>
  );
};

export default Generator;
