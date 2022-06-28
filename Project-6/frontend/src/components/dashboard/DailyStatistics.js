import React from 'react';
import styles from './DailyStatistics.module.css';
import { DashboardCard } from '../ui/index';
import { HeartRateCard, SleepCard, StepsCard, HydrationCard } from './index';

const DailyStatistics = () => {
  return (
    <div className={styles.container}>
      <DashboardCard>
        <HeartRateCard />
      </DashboardCard>

      <DashboardCard>
        <SleepCard />
      </DashboardCard>

      <DashboardCard>
        <HydrationCard />
      </DashboardCard>

      <DashboardCard>
        <StepsCard />
      </DashboardCard>
    </div>
  );
};

export default DailyStatistics;
