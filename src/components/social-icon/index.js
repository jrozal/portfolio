import React from 'react';
import styles from './social-icon.module.scss';

const SocialIcon = ({ icon, values, classNames = [] }) => {
  classNames = [
    styles.social,
    ...classNames.map(className => styles[className]),
  ].join(' ');

  const { ariaLabel, ...otherValues } = values;

  return (
    <li className={classNames}>
      <a aria-label={ariaLabel} {...otherValues}>{icon}</a>
    </li>
  )
};

export default SocialIcon