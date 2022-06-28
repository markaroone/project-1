import React from 'react';
import CheckoutItem from './CheckoutItem';
import styles from './CheckoutList.module.css';
import { v4 as uuidv4 } from 'uuid';

const CheckoutList = ({ cartItems, dispatchCartItems }) => {
  console.log(cartItems);
  return (
    <ul className={styles.ul}>
      {cartItems.arr.map((item) => (
        <CheckoutItem
          key={uuidv4()}
          item={item}
          dispatchCartItems={dispatchCartItems}
        />
      ))}
    </ul>
  );
};

export default CheckoutList;
