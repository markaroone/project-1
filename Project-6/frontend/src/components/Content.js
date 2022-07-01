import React from 'react';
import { Header, Footer } from './index';
import styles from './Content.module.css';

const Content = ({ children }) => {
  return (
    <section className={styles.section}>
      <Header />
      <div className={styles.children}>{children}</div>
    </section>
  );
};

export default Content;
