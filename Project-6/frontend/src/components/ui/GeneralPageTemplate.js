import React, { useState } from 'react';
import { Sidebar, Content } from '../index';
import styles from './GeneralPageTemplate.module.css';

const GeneralPageTemplate = ({ children }) => {
  return (
    <section className={styles.section}>
      <Sidebar />
      <Content>{children}</Content>
    </section>
  );
};

export default GeneralPageTemplate;
