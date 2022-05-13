import React from 'react';
import styles from './TaskFunctionalities.module.css';

const TaskFunctionalities = () => {
  return (
    <div className={styles['main-container']}>
      <button className={styles.search}>
        <ion-icon name='search-sharp'></ion-icon>
      </button>
      <button className={styles.sort}>
        <ion-icon name='funnel-sharp'></ion-icon>
      </button>
    </div>
  );
};

export default TaskFunctionalities;
