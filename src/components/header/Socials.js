import React from 'react';
import styles from './Socials.module.css';
import {
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  GitlabLogo,
  FacebookLogo,
} from 'phosphor-react';

const Socials = () => {
  return (
    <ul className={styles.socials}>
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

export default Socials;
