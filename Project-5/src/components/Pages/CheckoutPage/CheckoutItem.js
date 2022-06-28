import React from 'react';
import styles from './CheckoutItem.module.css';
import { TrashSimple, Plus, Minus } from 'phosphor-react';
import { ITEMS_COMMAND } from '../../../App';

const CheckoutItem = ({ item, dispatchCartItems }) => {
  //   console.log(item);

  const priceToDisplay = (item.qty * item.price).toLocaleString('en-us', {
    type: 'currency',
    minimumFractionDigits: 2,
  });

  const increaseQtyHandler = () => {
    dispatchCartItems({ type: ITEMS_COMMAND.ADD_ITM, item: item, qty: 1 });
  };

  const decreaseQtyHandler = () => {
    dispatchCartItems({ type: ITEMS_COMMAND.DECREASE_QTY, id: item.id });
  };

  const removeItemHandler = () => {
    dispatchCartItems({ type: ITEMS_COMMAND.REMOVE_ITM, id: item.id });
  };

  return (
    <li className={styles.item}>
      <div className={styles['img-container']}>
        <img className={styles.img} src={item.img} alt={item.name} />
      </div>

      <div className={styles.texts}>
        <h4 className={styles.name}>{item.name}</h4>
        <p className={styles.category}>{item.category}</p>
        <p className={styles.price}>&#8369; {priceToDisplay}</p>

        <div className={styles.actions}>
          <div className={styles['incdec-container']}>
            <button onClick={decreaseQtyHandler} className={styles.incdec}>
              <Minus size={20} weight='bold' />
            </button>

            <p className={styles.count}>{item.qty}</p>

            <button onClick={increaseQtyHandler} className={styles.incdec}>
              <Plus size={20} weight='bold' />
            </button>
          </div>

          <button
            onClick={removeItemHandler}
            className={`${styles.btn} ${styles.delete}`}
          >
            <TrashSimple size={20} weight='bold' />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CheckoutItem;
