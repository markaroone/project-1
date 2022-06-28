import React from 'react';
import styles from './Footer.module.css';
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';

const Footer = () => {
  return (
    <div className={styles['Footer-container']}>
      <div className={styles['mailing-list']}>
        <p className={styles['mailing-list__title']}>Join our mailing list</p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input type='text' placeholder='ENTER EMAIL'></input>
          <button>SIGN UP</button>
        </form>
      </div>

      <div className={styles['contact-us']}>
        <p className={styles.logo}>La Cucina</p>

        <div className={styles['address-container']}>
          <p className={styles.address}>11th Avenue, 30th Street</p>
          <p className={styles.address}>Bonifacio Global City</p>
        </div>

        <p className={styles.contact}>Contact Us | 8838 0528</p>
      </div>

      <div className={styles['social-media']}>
        <p className={styles['follow-us']}>Follow Us</p>
        <div className={styles.social}>
          <FacebookLogo size={32} />
          <InstagramLogo size={32} />
          <TwitterLogo size={32} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
