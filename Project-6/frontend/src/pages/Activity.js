import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { GeneralPageTemplate } from '../components/ui';
import { Footer } from '../components';
import {
  HeaderTitle,
  ActivityMap,
  MainData,
  DataGraph,
  DataStats,
  ActivitySettingsBar,
  ActivityNotes,
} from '../components/activity-item';
import styles from './Activity.module.css';

const Activity = () => {
  const userId = '62ac627a6ca528974b72554d';
  const { id, type } = useParams();

  const getData = async () => {
    const {
      data: {
        data: { data },
      },
    } = await axios.get(
      `http://localhost:8000/api/v1/activities/${type}-records/${id}?userId[eq]=${userId}`
    );

    const dataToSave = data[0];

    setData(dataToSave);
  };

  const [data, setData] = useState();

  useEffect(() => {
    return () => {
      getData();
    };
  }, []);

  return (
    <GeneralPageTemplate>
      <section className={styles.section}>
        {data && (
          <>
            <div className={styles.left}>
              <HeaderTitle
                data={{
                  name: data.name,
                  type: data.activityType,
                  id: data._id,
                  date: data.date,
                  gear: data.gear,
                }}
              />

              <ActivityMap data={data} />
              <MainData activity={data} />
              <div className={styles['graph-container']}>
                <DataGraph data={data} typeOfGraph={'altitude'} />
                <DataGraph data={data} typeOfGraph={'speed'} />
                <DataGraph data={data} typeOfGraph={'heartRate'} />
              </div>
              <DataStats data={data} />
            </div>
            <div className={styles.right}>
              <ActivitySettingsBar />
              <ActivityNotes data={data} />
            </div>
          </>
        )}
      </section>
      <Footer />
    </GeneralPageTemplate>
  );
};

export default Activity;
