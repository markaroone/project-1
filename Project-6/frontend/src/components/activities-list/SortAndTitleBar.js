import React from 'react';
import styles from './SortAndTitleBar.module.css';

const SortAndTitleBar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.date}>
        <button>
          date
          <span>
            <ion-icon name='caret-down-sharp'></ion-icon>
          </span>
        </button>
      </div>

      <div className={styles.title}>
        <button>
          title
          <span>
            <ion-icon name='caret-down-sharp'></ion-icon>
          </span>
        </button>
      </div>

      <div className={styles.distance}>
        <button>
          distance
          <span>
            <ion-icon name='caret-down-sharp'></ion-icon>
          </span>
        </button>
      </div>

      <div className={styles.time}>
        <button>
          time
          <span>
            <ion-icon name='caret-down-sharp'></ion-icon>
          </span>
        </button>
      </div>

      <div className={styles.avg}>
        <button>
          avg pace
          <span>
            <ion-icon name='caret-down-sharp'></ion-icon>
          </span>
        </button>
      </div>

      <div className={styles.ascent}>
        <button>
          total ascent
          <span>
            <ion-icon name='caret-down-sharp'></ion-icon>
          </span>
        </button>
      </div>

      <div className={styles.hr}>
        <button>
          avh HR
          <span>
            <ion-icon name='caret-down-sharp'></ion-icon>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SortAndTitleBar;
