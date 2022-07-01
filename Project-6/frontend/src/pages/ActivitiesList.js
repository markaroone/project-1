import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GeneralPageTemplate } from '../components/ui';
import { Footer } from '../components';
import {
  SearchAndFilterBar,
  SortAndTitleBar,
  ActivityList,
} from '../components/activities-list';
import axios from 'axios';
import styles from './ActivitiesList.module.css';

const ActivitiesList = () => {
  const userId = '62ac627a6ca528974b72554d';
  const { type } = useParams();

  const activityToFind =
    type === 'all-activities' || type === 'favorites'
      ? 'all-activities-list'
      : `${type}-records`;

  const getActivitiesData = async () => {
    const {
      data: {
        data: { data },
      },
    } = await axios.get(
      `http://localhost:8000/api/v1/activities/${activityToFind}/?fields=name,notes,date,activityType,stats&userId[eq]=${userId}${
        type === 'favorites' ? '&favorite[eq]=true' : ''
      }`
    );

    const dataToSave = data.sort(
      (a, b) => new Date(b.date.start) - new Date(a.date.start)
    );

    setActivities(dataToSave);
  };

  const [activities, setActivities] = useState();

  useEffect(() => {
    getActivitiesData();
  }, [type]);

  return (
    <GeneralPageTemplate>
      <section className={styles.section}>
        <SearchAndFilterBar />
        <SortAndTitleBar />
        <ActivityList activities={activities} />
      </section>
      <Footer />
    </GeneralPageTemplate>
  );
};

export default ActivitiesList;
