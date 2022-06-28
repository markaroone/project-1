import React, { useState } from 'react';
import styles from './Item.module.css';
import { ShoppingCartSimple, Plus, Minus } from 'phosphor-react';
import { ITEMS_COMMAND } from '../../../App';

const Item = ({ item, dispatchCartItems }) => {
  const MAX_QTY = 10;

  const [numberOfItems, setNumberOfItems] = useState(1);

  const inputItemsHandler = (e) => {
    setNumberOfItems(e.target.value);
  };

  const increaseItemsHandler = () => {
    if (numberOfItems < MAX_QTY) setNumberOfItems(numberOfItems + 1);
  };

  const decreaseItemsHandler = () => {
    if (numberOfItems > 1) setNumberOfItems(numberOfItems - 1);
  };

  const addToCartHandler = (e) => {
    // console.log(numberOfItems);
    e.preventDefault();
    dispatchCartItems({
      type: ITEMS_COMMAND.ADD_ITM,
      item: item,
      qty: numberOfItems,
    });

    // setNumberOfItems(1);
  };

  return (
    <li className={styles.item}>
      <div className={styles['img-container']}>
        <img className={styles.img} src={item.img} alt={item.name} />
      </div>

      <div className={styles.texts}>
        <p className={styles.name}>{item.name}</p>

        <p className={styles.description}>{item.description}</p>

        {/* <p className={styles.price}>&#8369; {item.price.toFixed(2)}</p> */}
      </div>

      <div className={styles.actions}>
        <p className={styles.price}>&#8369; {item.price.toFixed(2)}</p>
        <form className={styles.form} onSubmit={addToCartHandler}>
          <div className={styles['incdec-container']}>
            <button
              type='button'
              className={styles.incdec}
              onClick={decreaseItemsHandler}
            >
              <Minus size={20} weight='bold' />
            </button>

            <input
              type='number'
              min='1'
              max={`${MAX_QTY}`}
              value={numberOfItems}
              onChange={inputItemsHandler}
            />

            <button
              type='button'
              className={styles.incdec}
              onClick={increaseItemsHandler}
            >
              <Plus size={20} weight='bold' />
            </button>
          </div>
          <button type='submit' className={styles['add-to-cart__btn']}>
            <ShoppingCartSimple size={28} weight='fill' />
          </button>
        </form>
      </div>
    </li>
  );
};

export default Item;
