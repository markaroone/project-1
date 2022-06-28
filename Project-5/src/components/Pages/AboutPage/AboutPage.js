import React from 'react';
import styles from './AboutPage.module.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
  <div className={styles['about-us-container']}>

    <div className={styles['column']} id={styles['history']}>
      <h2>History</h2>
      <p>Back in 2000, La Cucina founder, Moses Garcia, was studying to become a chef in the urban area of Quezon City. As a poor, struggling student, Moses couldn't afford to buy his favorite Italian food. Thus, began his journey to make affordable, authentic Italian cuisine available to the wider Filipino public.</p>
    </div>
    
    <div className={styles['column']} id={styles['what-we-offer']}>
    <h2>What We Offer</h2>
    <p>Recognizing the reality of a fast-paced life in the city, La Cucina serves affordable, authentic Italian cuisine made in an instant. Among the food we offer are a variety of pizzas and pastas that fit the Filipino palate. Also available in our menu are a variety of thirst-quenching drinks that are suitable to never-ending conversations with friends and colleagues.</p>    
    </div>

  
      <div className={styles['best-Seller-Images-container']}>
      
        <div className={styles['image-Container']}>
          <Link className={styles.link} to={`/order/pizza`}>
            <img className={styles['bestSeller-image']}
              alt='Pizza'
              src='https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' />
          </Link>
        </div>
      
        <div className={styles['image-Container']}>
          <Link className={styles.link} to={`/order/pasta`}>
            <img className={styles['bestSeller-image']}
              alt='Pasta'
              src='https://images.unsplash.com/photo-1588013273468-315fd88ea34c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738' />
          </Link>
        </div>
          
        <div className={styles['image-Container']}>
          <Link className={styles.link} to={`/order/drinks`}>
            <img className={styles['bestSeller-image']}
              alt='Drinks'
              src='https://images.pexels.com/photos/4113660/pexels-photo-4113660.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
            />
          </Link>
        </div>

      </div>

    <div className={styles['column']} id={styles['operating-hours']}>  
    <h2>Operating Hours</h2>
    <p>True to its vision to cater to the needs of the busy workforce and university students in the city, La Cucina is open and delivers to any part of the Greater Manila Area 24/7.</p>
    </div>


  </div>)
};

export default AboutPage;