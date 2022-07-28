import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LittleAboutMe.module.css';

const LittleAboutMe = () => {
  return (
    <div className={styles.me}>
      <h3>A little about me</h3>
      <p>
        I started my programming journey as an industrial automation programmer
        but eventually fell in love with web development because of the
        fast-paced, fast-growing and more challenging tech industry. I find
        enjoyment in learning new things and applying what I have learned to
        create a more high- quality software.
      </p>

      <Link to='/about'>
        More about me
        <i>
          <ion-icon name='arrow-forward-sharp'></ion-icon>
        </i>
      </Link>
    </div>
  );
};

export default LittleAboutMe;
