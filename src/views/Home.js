import React from 'react';
import styles from './Home.module.css';
import heroImg from '../assets/img/hero-img.jpg';
import heroIllustration from '../assets/svg/hero-illustration-2.svg';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.text}>
        <p>Hi! my name is</p>
        <h1>Christian Fajardo</h1>
        <p className={styles.h2}>
          A passionate full-stack web developer and a frustrated web designer.
        </p>

        <div className={styles['hero-cta_container']}>
          <button className={styles['cta-btn_project']}>Projects</button>
          <button className={styles['cta-btn_talk']}>Let's Talk</button>
        </div>
      </div>

      <div className={styles['img-container']}>
        <img src={heroIllustration} alt='' />
        <div className={styles.blob}></div>
      </div>
    </section>
  );
};

export default Home;
