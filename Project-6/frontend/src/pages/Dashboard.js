import React, { useState, useEffect } from 'react';
import { GeneralPageTemplate, DashboardCard } from '../components/ui/index';
import { RecentActivity, DailyStatistics } from '../components/dashboard/index';
import styles from './Dashboard.module.css';
import axios from 'axios';

const Dashboard = () => {
  const [recentRunningData, setRecentRunningData] = useState();
  const [recentCyclingData, setRecentCyclingData] = useState();

  const userId = '62ac627a6ca528974b72554d';

  const getData = async () => {
    const dataArr = await Promise.all([
      axios.get(
        `http://localhost:8000/api/v1/activities/cycling-records/${userId}?sort=activityId&limit=1`
      ),
      axios.get(
        `http://localhost:8000/api/v1/activities/running-records/${userId}?sort=activityId&limit=1`
      ),
    ]);

    const [
      {
        data: {
          data: { activities: cyclingData },
        },
      },
      {
        data: {
          data: { activities: runningData },
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
      </section>
    </GeneralPageTemplate>
  );
};

export default Dashboard;
