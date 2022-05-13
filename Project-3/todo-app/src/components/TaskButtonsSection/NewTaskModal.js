import React from 'react';
import styles from './NewTaskModal.module.css';
import Modal from '../UI/Modal';

const NewTaskModal = () => {
  return (
    <Modal>
      <form className={styles['main-container']}>
        <input className={styles.title} type='text' placeholder='Enter title' />

        {/* <input
          className={styles.task}
          type='textarea'
          placeholder='Enter task'
        /> */}

        <textarea
          className={styles.task}
          cols='30'
          rows='50'
          placeholder='Enter task'
        ></textarea>
        <div className={styles.bottom}>
          <select className={styles.select} name='' id='priority-select'>
            <option value=''>Priority</option>
            <option value='no'>None</option>
            <option value='no'>Low</option>
            <option value='no'>Medium</option>
            <option value='no'>High</option>
          </select>

          <button className={styles.submit}>Add Task</button>
        </div>
      </form>
    </Modal>
  );
};

export default NewTaskModal;
