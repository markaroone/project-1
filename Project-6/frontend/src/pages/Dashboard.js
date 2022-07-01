import React, { useState, useEffect } from 'react';
import { GeneralPageTemplate, DashboardCard } from '../components/ui/index';
import {
  RecentActivity,
  DailyStatistics,
  TotalActivitiesPerDay,
  DailyStepsGraph,
  DailyHydrationGraph,
} from '../components/dashboard/index';
import { Footer } from '../components';
import styles from './Dashboard.module.css';
import axios from 'axios';

const Dashboard = () => {
  const [recentRunningData, setRecentRunningData] = useState();
  const [recentCyclingData, setRecentCyclingData] = useState();

  const userId = '62ac627a6ca528974b72554d';

  const getData = async () => {
    const dataArr = await Promise.all([
      axios.get(
        `http://localhost:8000/api/v1/activities/cycling-records?userId[eq]=${userId}&sort=activityId&limit=1`
      ),
      axios.get(
        `http://localhost:8000/api/v1/activities/running-records?userId[eq]=${userId}&sort=activityId&limit=1`
      ),
    ]);

    const [
      {
        data: {
          data: { data: cyclingData },
        },
      },
      {
        data: {
          data: { data: runningData },
        },
      },
    ] = dataArr;

    setRecentCyclingData(cyclingData[0]);
    setRecentRunningData(runningData[0]);
  };

  useEffect(() => {
    return () => {
      getData();
    };
  }, []);

  // useEffect(() => {
  //   recentCyclingData && console.log(recentCyclingData);
  //   recentRunningData && console.log(recentRunningData);
  // }, [recentCyclingData, recentRunningData]);

  return (
    <GeneralPageTemplate>
      <section className={styles.section}>
        <div className={styles.body}>
          <div className={styles.content}>
            <p className={styles.title}>recent activity</p>
            <DashboardCard>
              {recentCyclingData && (
                <RecentActivity activity={recentCyclingData} />
              )}
            </DashboardCard>
          </div>

          {/* <div className={styles.content}>
          <p className={styles.title}>recent activity</p>
          <DashboardCard>
            {recentRunningData && (
              <RecentActivity activity={recentRunningData} />
            )}
          </DashboardCard>
        </div> */}

          <div className={styles.content}>
            <p className={styles.title}>daily statistics</p>
            <DailyStatistics />
          </div>

          <div className={styles.content}>
            <p className={styles.title}>Daily Steps Graph</p>
            <DailyStepsGraph />
          </div>

          <div className={styles.content}>
            <p className={styles.title}>Daily Hydration Graph</p>
            <DailyHydrationGraph />
          </div>
        </div>
      </section>
      <Footer />
    </GeneralPageTemplate>
  );
};

export default Dashboard;
