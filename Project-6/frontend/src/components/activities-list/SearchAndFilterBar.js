import React from 'react';
import styles from './SearchAndFilterBar.module.css';

const SearchAndFilterBar = () => {
  return (
    <div className={styles.bar}>
      <form className={styles.search}>
        <input type='text' placeholder='search activities' />
        <button>
          <ion-icon name='search-sharp'></ion-icon>
        </button>
      </form>

      <ul className={styles.filter}>
        <li className={styles.current}>
          <button>all</button>
        </li>
        <li>
          <button>running</button>
        </li>
        <li>
          <button>cycling</button>
        </li>
        <li>
          <button>favorites</button>
        </li>
      </ul>
    </div>
  );
};

export default SearchAndFilterBar;
