import React from 'react';
import styles from './Home.module.css';
import { Hero, LittleAboutMe, RecentProjects } from '../components/Home/';
const Home = () => {
  return (
    <section className={styles.home}>
      <Hero />
      <LittleAboutMe />
      <RecentProjects />
    </section>
  );
};

export default Home;
