import React from 'react';
import styles from './Header.module.css';

const Header = ({ tasks }) => {
  const currentTime = new Date().getHours();

  console.log(currentTime);

  const getGreeting = (time) => {
    if (time < 12) return 'morning';

    if (time >= 12 && time < 18) return 'afternoon';

    if (time > 18) return 'evening';
  };

  const pendingTasks = tasks.reduce((sum, cur) => {
    if (cur.status === 'pending') sum++;
    return sum;
  }, 0);

  const str =
    pendingTasks > 0
      ? `You have ${pendingTasks} pending task${pendingTasks > 1 ? 's' : ''}.`
      : 'No pending task.';

  return (
    <header className={styles['main-container']}>
      <h1>Good {getGreeting(currentTime)}, Christian</h1>
      <p>{str}</p>
    </header>
  );
};

export default Header;
