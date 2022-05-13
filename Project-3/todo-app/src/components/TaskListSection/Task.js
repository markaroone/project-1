import React from 'react';
import styles from './Task.module.css';
import { TASKS_COMMANDS } from '../../App';
import { TASK_STATUS } from '../../App';

const Task = ({ task, dispatchTasks }) => {
  const markAsDoneHandler = () => {
    dispatchTasks({ type: TASKS_COMMANDS.MARK_TASK_AS_DONE, id: task.id });
  };

  const deleteTaskHandler = () => {
    dispatchTasks({ type: TASKS_COMMANDS.DELETE_TASK, id: task.id });
  };

  return (
    <li className={styles.li}>
      <span className={styles.title}>{task.title}</span>

      <p className={styles.task}>{task.task}</p>

      <div className={styles.footer}>
        <span className={`${styles.tag} ${styles[`${task.priority}`]}`}>
          {task.priority} PRIORITY
        </span>

        <div className={styles['btns-container']}>
          {task.status === TASK_STATUS.PENDING && (
            <button className={styles.finish} onClick={markAsDoneHandler}>
              <ion-icon name='checkmark-sharp'></ion-icon>
            </button>
          )}

          <button className={styles.delete} onClick={deleteTaskHandler}>
            <ion-icon name='trash-sharp'></ion-icon>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Task;
