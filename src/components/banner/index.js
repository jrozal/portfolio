import React from 'react';
import { isMobile } from 'react-device-detect';
import SocialIcon from '../social-icon';
import { socialData } from '../../data/social';
import styles from './banner.module.scss';

const Banner = () => {
  return (
    <header className={styles.banner}>
      <ul className={`
        ${styles.social}
        ${isMobile ? styles.socialMobile : null}
      `}>
        {socialData.map((social, i) => (
          <SocialIcon
            key={i}
            icon={social.icon}
            values={social.values}
            classNames={[social.className]}
          />
        ))}
      </ul>
      <div className={styles.text}>
        <h1>
          <span>Justin Rozal</span>
        </h1>
        <h2 className={styles.title}>
          Full-Stack Software Engineer
        </h2>
      </div>
    </header>
  )
};

export default Banner;