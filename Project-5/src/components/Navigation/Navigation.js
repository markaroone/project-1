import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.css';
import { User, ShoppingCartSimple, List, HeartStraight } from 'phosphor-react';
import Modal from '../UI/Modal';
import useWidth from '../../hooks/useWidth';
import { Link } from 'react-router-dom';

const Navigation = ({ cartItems }) => {
  console.log(
    cartItems.arr.reduce((total, current) => {
      return (total = total + current.qty);
    }, 0)
  );

  const [showModal, setShowModal] = useState(false);

  const width = useWidth();

  const toggleModalHandler = () => {
    setShowModal(!showModal);
    console.log('Dessert');
  };

  const showHamburger = width <= 768;
  const showLinks = width > 768;

  const totalItems = cartItems.arr.reduce((total, current) => {
    return (total = total + current.qty);
  }, 0);

  return (
    <section className={styles.wrapper}>
      {showModal && showHamburger && (
        <Modal onClose={toggleModalHandler}>
          <div className={styles['sidebar-modal']}>
            <Link onClick={toggleModalHandler} to='/'>
              <p className={styles['main-link']}>Home</p>
            </Link>
            <Link to='/order/pizza'>
              <p className={styles['main-link']}>Order</p>
            </Link>
            <div className={styles['modal-container']}>
              <Link
                classnName={styles['modal-link']}
                onClick={toggleModalHandler}
                to={`/order/promo`}
              >
                Promo
              </Link>

              <Link
                classnName={styles['modal-link']}
                onClick={toggleModalHandler}
                to={`/order/pizza`}
              >
                Pizza
              </Link>

              <Link
                classnName={styles['modal-link']}
                onClick={toggleModalHandler}
                to={`/order/pasta`}
              >
                Pasta
              </Link>

              <Link
                classnName={styles['modal-link']}
                onClick={toggleModalHandler}
                to={`/order/chicken`}
              >
                Chicken
              </Link>

              <Link
                classnName={styles['modal-link']}
                onClick={toggleModalHandler}
                to={`/order/sides`}
              >
                Sides
              </Link>

              <Link
                classnName={styles['modal-link']}
                onClick={toggleModalHandler}
                to={`/order/dessert`}
              >
                Dessert
              </Link>

              <Link
                classnName={styles['modal-link']}
                onClick={toggleModalHandler}
                to={`/order/drinks`}
              >
                Drinks
              </Link>
            </div>
            <Link
              classnName={styles['modal-link']}
              onClick={toggleModalHandler}
              to='/about'
            >
              <p className={styles['main-link']}>About Us</p>
            </Link>
          </div>
        </Modal>
      )}

      <nav className={styles.nav}>
        {showLinks && (
          <div className={styles['links-container']}>
            <Link className={styles.link} to='/'>
              Home
            </Link>
            <Link className={styles.link} to='/order/pizza'>
              Order
            </Link>
            <Link className={styles.link} to='/about'>
              About Us
            </Link>
          </div>
        )}

        <ul className={styles['icons-container']}>
          {showHamburger && (
            <li className={styles.hamburger}>
              <button onClick={toggleModalHandler}>
                <List
                  className={`${styles.icon} ${styles.hamburger}`}
                  size={28}
                  weight='bold'
                />
              </button>
            </li>
          )}

          <li>
            <HeartStraight className={styles.icon} size={28} weight='bold' />
          </li>

          <li className={styles['cart-logo']}>
            <Link className={styles.link} to='/checkout'>
              <ShoppingCartSimple
                className={styles.icon}
                size={28}
                weight='bold'
              />
            </Link>
            {totalItems > 0 && <span>{totalItems}</span>}
          </li>

          <li>
            <User className={styles.icon} size={28} weight='bold' />
          </li>
        </ul>

        <span className={styles.logo}>La Cucina</span>
      </nav>
    </section>
  );
};

export default Navigation;
