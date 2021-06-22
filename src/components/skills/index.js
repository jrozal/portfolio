import React from 'react';
import styles from './skills.module.scss';
import { skillsData } from '../../data/skills';
import { technologies } from '../../data/technologies';

const SkillItems = ({ skillItems }) => (
  <div className={styles.skillSet}>
    <ul className={styles.skillList}>
      {skillItems.map((item, i) => (
        <li key={i} className={styles.item}>
          <i className={styles.logo}>{technologies[`${item}`]}</i>
          <span className={styles.skill}>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section className="component">
      <h2>Skills</h2>
      <ul className={styles.list}>
        {skillsData.map((skill, i) => (
          <li key={i}>
            <span className={styles.category}>{skill.category}</span>
            <SkillItems skillItems={skill.items}/>
          </li>
        ))}
      </ul>
    </section>
  )
};

export default Skills;