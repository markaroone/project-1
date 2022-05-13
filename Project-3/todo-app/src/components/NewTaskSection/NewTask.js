import React, { useState, useRef, useEffect } from 'react';
import styles from './NewTask.module.css';
import { v4 as uuidv4 } from 'uuid';
import { TASKS_COMMANDS } from '../../App';

const NewTask = ({ tasks, dispatchTasks }) => {
  const [showHiddenForm, setShowHiddenForm] = useState(false);

  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('no');
  const [taskSubmissionStatus, setTaskSubmissionStatus] = useState(null);

  const taskInputRef = useRef();

  const toggleHiddenFormHandler = () => {
    setShowHiddenForm(!showHiddenForm);
  };

  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const changeTaskHandler = (e) => {
    setTask(e.target.value);
  };

  const changePriorityHandler = (e) => {
    setPriority(e.target.value);
  };

  const addNewTaskHandler = (e) => {
    e.preventDefault();
    const newTask = {
      status: 'pending',
      id: uuidv4(),
      priority: priority,
      task: task.trim(),
      title: title.trim(),
    };

    if (isDuplicate(newTask.task)) {
      showStatus('Duplicate task found.');
      return;
    }

    resetInputFields();

    taskInputRef.current.focus();

    dispatchTasks({ type: TASKS_COMMANDS.ADD_TASK, task: newTask });

    showStatus('Task added successfully.');
  };

  const resetInputFields = () => {
    setTitle('');
    setTask('');
    setPriority('no');
  };

  const isDuplicate = (str) => {
    return tasks.some((el) => el.task.toLowerCase() === str.toLowerCase());
  };

  const showStatus = (str) => {
    setTaskSubmissionStatus(str);
    setTimeout(() => {
      setTaskSubmissionStatus(null);
    }, 2000);
  };

  useEffect(() => {
    showHiddenForm && taskInputRef.current.focus();
    !showHiddenForm && resetInputFields();
  }, [showHiddenForm]);

  return (
    <form className={styles.form} onSubmit={addNewTaskHandler}>
      {!showHiddenForm && (
        <div className={styles['add-task-enabler']}>
          <button
            type='button'
            className={styles['add-task-enabler__btn']}
            onClick={toggleHiddenFormHandler}
          >
            <ion-icon name='add-sharp'></ion-icon>
          </button>

          <input
            className={styles['open-form-input']}
            type='text'
            placeholder='Add new task...'
            onFocus={toggleHiddenFormHandler}
          />
        </div>
      )}

      {taskSubmissionStatus && showHiddenForm && (
        <p className={`${styles['submission-status']} ${styles.successful}`}>
          {taskSubmissionStatus}
        </p>
      )}

      {showHiddenForm && (
        <div className={styles.hidden}>
          <input
            className={styles.title}
            type='text'
            placeholder='Title'
            value={title}
            onChange={changeTitleHandler}
          />

          <textarea
            required
            ref={taskInputRef}
            className={styles.task}
            name='task'
            id='task'
            placeholder='Enter task...'
            value={task}
            onChange={changeTaskHandler}
          />

          <div className={styles.bottom}>
            <select
              className={styles.select}
              name='priority'
              id='priority'
              onChange={changePriorityHandler}
              value={priority}
            >
              <option value='no' disabled>
                PRIORITY
              </option>
              <option value='no'>NONE</option>
              <option value='low'>LOW</option>
              <option value='medium'>MEDIUM</option>
              <option value='high'>HIGH</option>
            </select>

            <button className={styles.add}>Add task</button>
          </div>

          <button
            className={styles.cancel}
            type='button'
            onClick={toggleHiddenFormHandler}
          >
            <ion-icon name='close-sharp'></ion-icon>
          </button>
        </div>
      )}
    </form>
  );
};

export default NewTask;
