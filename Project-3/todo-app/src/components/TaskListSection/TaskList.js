import React from 'react';
import Task from './Task';
import TaskBtns from '../TaskButtonsSection/TaskBtns';
import styles from './TaskList.module.css';
import { v4 as uuidv4 } from 'uuid';

const TaskList = ({ tasks, dispatchTasks }) => {
  const strModifier = tasks.taskToShow === 'pending' ? 'pending' : 'finished';
  const strOutput = `No ${strModifier} task to show.`;

  return (
    <ul className={styles['main-container']}>
      {tasks.taskArr.some((el) => el.status === tasks.taskToShow) &&
        tasks.taskArr
          .filter((el) => el.status === tasks.taskToShow)
          .map((task) => (
            <Task key={uuidv4()} task={task} dispatchTasks={dispatchTasks} />
          ))}

      {tasks.taskArr.some((el) => el.status === tasks.taskToShow) || (
        <p className={styles.str}>{strOutput}</p>
      )}
    </ul>
  );
};

export default TaskList;
