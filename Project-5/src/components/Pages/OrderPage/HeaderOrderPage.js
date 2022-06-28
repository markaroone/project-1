import React, { useState } from 'react';
import styles from './HeaderOrderPage.module.css';

const HeaderOrderPage = ({ onChangeSortType, category }) => {
  // const [type, setType] = useState('all');

  const onChangeTypeHandler = (e) => {
    onChangeSortType(e.target.value);
  };

  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{category}</h2>

      <form className={styles.form}>
        <label htmlFor='select'>Sort by:</label>
        <select name='' id='' onChange={onChangeTypeHandler}>
          <option value='all'>All</option>
          {/* <option value='favorite'>Favorite</option> */}
          <option value='popular'>Popular</option>
          <option value='price-ascending'>Price ascending</option>
          <option value='price-descending'>Price descending</option>
          <option value='latest'>Latest</option>
          <option value='oldest'>Oldest</option>
        </select>
      </form>
    </div>
  );
};

export default HeaderOrderPage;
