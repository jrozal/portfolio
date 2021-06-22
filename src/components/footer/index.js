import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <span className={styles.name}>
          Copyright Justin Rozal {year}
        </span>
      </div>
    </footer>
  )
};

export default Footer;