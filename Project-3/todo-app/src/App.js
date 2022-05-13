import React, { useReducer, useState } from 'react';
import './App.css';
import Header from './components/HeaderSection/Header';
import TaskList from './components/TaskListSection/TaskList';
import TaskBtns from './components/TaskButtonsSection/TaskBtns';
import SAMPLE_TASKS from './assets/sample-tasks.json';
import Modal from './components/UI/Modal';
import NewTask from './components/NewTaskSection/NewTask';

export const TASKS_COMMANDS = {
  CHANGE_TASK_TO_SHOW: 'change-task-to-show',
  ADD_TASK: 'add-task',
  DELETE_TASK: 'delete-task',
  MARK_TASK_AS_DONE: 'mark-task-as-done',
};

export const TASK_STATUS = {
  PENDING: 'pending',
  DONE: 'done',
};

const reducerTasks = (tasks, action) => {
  if (action.type === TASKS_COMMANDS.CHANGE_TASK_TO_SHOW) {
    return { ...tasks, taskToShow: action.status };
  }

  if (action.type === TASKS_COMMANDS.ADD_TASK) {
    return { ...tasks, taskArr: [action.task, ...tasks.taskArr] };
  }

  if (action.type === TASKS_COMMANDS.MARK_TASK_AS_DONE) {
    return {
      ...tasks,
      taskArr: tasks.taskArr.map((task) => {
        if (task.id === action.id) task.status = TASK_STATUS.DONE;
        return task;
      }),
    };
  }

  if (action.type === TASKS_COMMANDS.DELETE_TASK) {
    return {
      ...tasks,
      taskArr: tasks.taskArr.filter((el) => el.id !== action.id),
    };
  }

  return tasks;
};

function App() {
  console.log(SAMPLE_TASKS);

  const [tasks, dispatchTasks] = useReducer(reducerTasks, {
    taskToShow: TASK_STATUS.PENDING,
    taskArr: SAMPLE_TASKS,
  });

  return (
    <div className='App'>
      <Header tasks={tasks.taskArr} />
      <NewTask tasks={tasks.taskArr} dispatchTasks={dispatchTasks} />
      <TaskBtns taskToShow={tasks.taskToShow} dispatchTasks={dispatchTasks} />
      <TaskList tasks={tasks} dispatchTasks={dispatchTasks} />
    </div>
  );
}

export default App;
