import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <ul className={styles.sidebar}>
      <li>
        <a href='https://instagram.com/markaroone/'>
          <InstagramLogo
            className={styles.icon}
            size='2.2rem'
            color='#343a40'
          />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/mark-christian-fajardo/'>
          <LinkedinLogo className={styles.icon} size='2.2rem' color='#343a40' />
        </a>
      </li>
      <li>
        <a href='https://github.com/markaroone'>
          <GithubLogo className={styles.icon} size='2.2rem' color='#343a40' />
        </a>
      </li>
      <li>
        <a href='https://gitlab.com/markaroone'>
          <GitlabLogo className={styles.icon} size='2.2rem' color='#343a40' />
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com/markchristianfajardo/'>
          <FacebookLogo className={styles.icon} size='2.2rem' color='#343a40' />
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
