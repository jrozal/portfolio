import React from 'react';
import styles from './skill-item.module.scss';
import { technologies } from '../../../data/technologies';

const SkillItem = ({ skill }) => (
  <li className={styles.item}>
    <i className={styles.logo}>{technologies[`${skill}`]}</i>
    <span className={styles.skill}>{skill}</span>
  </li>
);

export default SkillItem;