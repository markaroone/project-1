import React from 'react';
import styles from './Page.module.css';

const Page = ({ children }) => {
  return <section className={styles.page}>{children}</section>;
};

export default Page;
