import React from 'react';
import CheckoutList from './CheckoutList';
import styles from './CheckoutPage.module.css';
import OrderSummary from './OrderSummary';

const CheckoutPage = ({ cartItems, dispatchCartItems }) => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles['cart-title']}>Your Cart</h2>
      <div className={styles.content}>
        {cartItems.totalAmount > 0 && (
          <div className={styles['checkout-container']}>
            <CheckoutList
              cartItems={cartItems}
              dispatchCartItems={dispatchCartItems}
            />

            <OrderSummary cartItems={cartItems} />
          </div>
        )}
      </div>

      {cartItems.totalAmount === 0 && (
        <p className={styles['no-item__message']}>No items in cart.</p>
      )}
    </section>
  );
};

export default CheckoutPage;
