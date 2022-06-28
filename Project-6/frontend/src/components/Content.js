import React from 'react';
import { Header, Footer } from './index';
import styles from './Content.module.css';

const Content = ({ children }) => {
  return (
    <section className={styles.section}>
      <Header />
      <div>{children}</div>

      {/* <Footer /> */}
    </section>
  );
};

export default Content;
