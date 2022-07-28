import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RecentProjectItem.module.css';

const RecentProjectItem = ({ project }) => {
  const navigate = useNavigate();
  const ref = useRef();

  const navigateToProjectsHandler = () => {
    navigate('/projects');
  };

  return (
    <li
      className={styles.project}
      onClick={navigateToProjectsHandler}
      ref={ref}
    >
      <img src={project.images[2]} alt='project image' />

      <div className={styles.overlay}>
        <p className={styles.name}>{project.name}</p>
        <p className={styles.description}>{project.description}</p>

        <ul className={styles.tags}>
          {project.tech.map((tag, i) => (
            <li key={i} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default RecentProjectItem;
