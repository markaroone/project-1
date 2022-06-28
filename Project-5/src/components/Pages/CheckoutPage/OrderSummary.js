import React from 'react';
import styles from './OrderSummary.module.css';

const OrderSummary = ({ cartItems }) => {
  const subtotalAmt = cartItems.totalAmount.toLocaleString('en-us', {
    type: 'currency',
    minimumFractionDigits: 2,
  });

  return (
    <div className={styles.wrapper}>
      <form action='' className={styles.form}>
        <label htmlFor=''>Promo code</label>
        <input type='text' placeholder='ILOVEUPLIFT3000' />
      </form>

      <p className={styles['order-summary__title']}>Order Summary</p>

      <div className={styles['total-list']}>
        <div className={styles.subtotal}>
          <p>Subtotal</p>
          <span>&#8369; {subtotalAmt}</span>
        </div>

        <div className={styles.shipping}>
          <p>Estimated Shipping</p>
          <span>Free shipping</span>
        </div>

        <div className={styles.total}>
          <p>Estimated Total</p>
          <span>&#8369; {subtotalAmt}</span>
        </div>

        <button className={styles['checkout-btn']}>Checkout Items</button>
      </div>
    </div>
  );
};

export default OrderSummary;
