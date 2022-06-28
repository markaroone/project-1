import React from 'react';
import styles from './HomePage.module.css';
import image from '../../../assets/images/istockphoto-973297786-612x612.jpg';
import InfiniteCarousel from 'react-leaf-carousel';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles['header-container']}>
          <h2> It's Made Quick &amp; Delicious!&#8482;</h2>
          <h1> The art of Speed &amp; Quality </h1>
          <p>
            {' '}
            Find all your favorite pizza in one website! It's quick, easy and
            totally secure.{' '}
          </p>
          <Link className={styles.link} to='/order/pizza'>
            <button>Order Now!</button>
          </Link>
        </div>

        <div className={styles['hero-image']}>
          <img src={image} />
        </div>
      </section>

      <ul className={styles['list-container']}>
        <li>
          {' '}
          <img
            src='https://www.nicepng.com/png/full/26-269787_grab-logo-grab-logo-png.png'
            alt='Grab Logo'
          />{' '}
        </li>
        <li>
          {' '}
          <img
            src='https://seeklogo.com/images/F/foodpanda-logo-551BD51321-seeklogo.com.png'
            alt='Food Panda Logo'
          />{' '}
        </li>
        <li>
          {' '}
          <img
            src='https://seeklogo.com/images/L/lalamove-logo-AF143284AE-seeklogo.com.png'
            alt='Lalamove Logo'
          />{' '}
        </li>
        <li>
          {' '}
          <img
            src='https://seeklogo.com/images/Z/zomato-logo-8AAA1690DE-seeklogo.com.png'
            alt='Zomato Logo'
          />{' '}
        </li>
        <li>
          {' '}
          <img
            src='https://mangan.ph/images/mangan-logo.png'
            alt='Mangan PH Logo'
          />{' '}
        </li>
      </ul>

      <h2 className={styles['menu-header']}> OUR MENU </h2>

      <div>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ]}
          dots={true}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={3}
          slidesToShow={3}
          scrollOnDevice={true}
        >
          <Link className={styles.link} to={`/order/promo`}>
            <h2>Promo</h2>
            <img
              className={styles['carousel-image']}
              alt='Promo'
              src='https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            />
          </Link>

          <Link className={styles.link} to={`/order/pizza`}>
            <h2>Pizza</h2>
            <img
              className={styles['carousel-image']}
              alt='Pizza'
              src='https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            />
          </Link>

          <Link className={styles.link} to={`/order/pasta`}>
            <h2>Pasta</h2>
            <img
              className={styles['carousel-image']}
              alt='Pasta'
              src='https://cdn.pixabay.com/photo/2017/01/17/17/05/spaghetti-1987454_960_720.jpg'
            />
          </Link>
          <Link className={styles.link} to={`/order/chicken`}>
            <h2>Chicken</h2>
            <img
              className={styles['carousel-image']}
              alt='Chicken'
              src='https://cdn.pixabay.com/photo/2016/03/05/21/38/batter-1239024__480.jpg'
            />
          </Link>
          <Link className={styles.link} to={`/order/sides`}>
            <h2>Sides</h2>
            <img
              className={styles['carousel-image']}
              alt='Sides'
              src='https://images.unsplash.com/photo-1629385778470-6fd217971066?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
            />
          </Link>
          <Link className={styles.link} to={`/order/dessert`}>
            <h2>Dessert</h2>
            <img
              className={styles['carousel-image']}
              alt='Dessert'
              src='https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
            />
          </Link>
          <Link className={styles.link} to={`/order/drinks`}>
            <h2>Drinks</h2>
            <img
              className={styles['carousel-image']}
              alt='Drinks'
              src='https://images.pexels.com/photos/4113660/pexels-photo-4113660.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
            />
          </Link>
        </InfiniteCarousel>
      </div>
      <section className={styles.latestMenu}>
        <div className={styles['latestMenu-container']}>
          <h3>WHAT'S HOT?</h3>
          <p>
            <i>The latest addition to our menu is</i>
            <i>
              <b> Pizza with Egg</b>
            </i>
            <i>
              ! Not only do you have more reason to eat pizza in the morning,
              you can also treat it as your healthy alternative to everyone's
              favorite Bismark Pizza.
            </i>
          </p>
        </div>

        <div className={styles['latestMenu-image']}>
          <Link className={styles.link} to={`/order/pizza`}>
            <img
              src='https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt='Pizza with Egg'
            />
          </Link>
        </div>
      </section>

      <h2 className={styles['bestSeller-header']}> OUR BESTSELLER </h2>

      <div className={styles['best-Seller-Images-container']}>
        <div className={styles['image-Container']}>
          <Link className={styles.link} to={`/order/pizza`}>
            <img
              className={styles['bestSeller-image']}
              alt='Pizza'
              src='https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            />
          </Link>
        </div>

        <div className={styles['image-Container']}>
          <Link className={styles.link} to={`/order/pasta`}>
            <img
              className={styles['bestSeller-image']}
              alt='Pasta'
              src='https://images.unsplash.com/photo-1588013273468-315fd88ea34c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738'
            />
          </Link>
        </div>

        <div className={styles['image-Container']}>
          <Link className={styles.link} to={`/order/drinks`}>
            <img
              className={styles['bestSeller-image']}
              alt='Drinks'
              src='https://images.pexels.com/photos/4113660/pexels-photo-4113660.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
