import React from 'react';
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';
import heroSectionImg from '../../assets/images/home-hero-section.jpg';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles['img-container']}>
        <img src={heroSectionImg} alt='Mark Christian Fajardo' />
      </div>

      <div className={styles.texts}>
        <p>Hi! My name is,</p>
        <p>Mark Christian</p>
        <p>A full-stack web developer and an ambitious web designer.</p>
        <Link className={styles.cta} to='/projects'>
          See Projects
          <i>
            <ion-icon name='arrow-forward-sharp'></ion-icon>
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
