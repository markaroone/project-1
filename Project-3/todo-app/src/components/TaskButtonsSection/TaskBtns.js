import React from 'react';
import styles from './TaskBtns.module.css';
import NewTaskModal from './NewTaskModal';
import { TASKS_COMMANDS } from '../../App';
import { TASK_STATUS } from '../../App';

const TaskBtns = ({ taskToShow, dispatchTasks }) => {
  const changeToPendingHandler = () => {
    dispatchTasks({
      type: TASKS_COMMANDS.CHANGE_TASK_TO_SHOW,
      status: TASK_STATUS.PENDING,
    });
  };

  const changeToDoneHandler = () => {
    dispatchTasks({
      type: TASKS_COMMANDS.CHANGE_TASK_TO_SHOW,
      status: TASK_STATUS.DONE,
    });
  };

  return (
    <div className={styles['main-container']}>
      <button
        className={`${styles['task-btn__pending']} ${
          taskToShow === 'pending' && styles.selected
        }`}
        onClick={changeToPendingHandler}
      >
        Pending
      </button>

      <button
        className={`${styles['task-btn__finished']} ${
          taskToShow === 'done' && styles.selected
        }`}
        onClick={changeToDoneHandler}
      >
        Finished
      </button>

      <div className={styles['search-sort-filter-option__container']}>
        <button className={styles.search}>
          <ion-icon name='search-sharp'></ion-icon>
        </button>

        <button className={styles.filter}>
          <ion-icon name='filter-sharp'></ion-icon>
        </button>

        <button className={styles.sort}>
          <ion-icon name='funnel-sharp'></ion-icon>
        </button>

        <button className={styles.option}>
          <ion-icon name='ellipsis-vertical-sharp'></ion-icon>
        </button>
      </div>

      {/* <NewTaskModal /> */}
    </div>
  );
};

export default TaskBtns;
