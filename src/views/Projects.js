import React from 'react';
import styles from './Projects.module.css';
import { recentProjectsData } from '../data/recentProjects';
import RecentProjectItem from '../components/Home/RecentProjectItem';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h3>Projects</h3>

      <ul className={styles['projects-container']}>
        {recentProjectsData.map((data, i) => {
          return <RecentProjectItem key={i} project={data} />;
        })}
      </ul>
    </section>
  );
};

export default Projects;
