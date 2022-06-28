import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SidebarOrderPage.module.css';

const SidebarOrderPage = () => {
  return (
    <div className={styles.sidebar}>
      <p>Categories</p>

      <ul>
        {/* <li>
          <Link className={styles.link} to={`/order/promo`}>
            Promo
          </Link>
        </li> */}
        <li>
          <Link className={styles.link} to={`/order/pizza`}>
            Pizza
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`/order/pasta`}>
            Pasta
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`/order/chicken`}>
            Chicken
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`/order/sides`}>
            Sides
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`/order/dessert`}>
            Dessert
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`/order/drinks`}>
            Drinks
          </Link>
        </li>
        {/* <li>
          <Link className={styles.link} to={`/order/add`}>
            + Add Item
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default SidebarOrderPage;
