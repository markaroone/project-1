import React, { useState } from 'react';
import RecentProjectItem from './RecentProjectItem';
import styles from './RecentProjects.module.css';

const recentProjects = [
  {
    name: 'Layag Travel Tours',
    description: 'A travel booking application for everyone.',
    number: 7,
    images: [],
    tech: ['mongoDB', 'express', 'react', 'node'],
  },
  {
    name: 'Uplifted|Health Activity Tracker App',
    description: 'Health and activity tracking application.',
    number: 6,
    images: [],
    tech: ['mongoDB', 'express', 'react', 'node'],
  },
  {
    name: 'La Cucina Restaurant App',
    description: 'We deliver delicious foods at you doorstep.',
    number: 5,
    images: [],
    tech: ['html', 'css', 'javascript', 'react'],
  },
  {
    name: 'To Do List App',
    description: 'Create a to do and set reminders.',
    number: 4,
    images: [],
    tech: ['html', 'css', 'javascript', 'react'],
  },
];

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const allProjectImages = Object.values(
  importAll(
    require.context(
      `${__dirname}/../../assets/images/projects/all`,
      false,
      /\.(png|jpe?g|svg)$/
    )
  )
);

recentProjects.forEach(
  (project) =>
    (project.images = allProjectImages.filter((img) => {
      if (+img.substr(14, 1) === project.number) return img;
    }))
);

const RecentProjects = () => {
  const [showOverlay, setShowOverlay] = useState([false, false, false, false]);
  return (
    <div className={styles.projects}>
      <h3>Recent Projects</h3>

      <ul className={styles['projects-container']}>
        {recentProjects.map((project, i) => (
          <RecentProjectItem key={i} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default RecentProjects;
