import React from 'react';
import styles from './skills.module.scss';
import { skillsData } from '../../data/skills';
import SkillItem from './skill-item';

const SkillList = ({ skillItems }) => (
  <div className={styles.skillSet}>
    <ul className={styles.skillList}>
      {skillItems.map((item, i) => (
        <SkillItem key={i} skill={item}/>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section className={`component ${styles.skillWrapper}`} id="skills">
      <h2>Skills</h2>
      <ul className={styles.list}>
        {skillsData.map((skill, i) => (
          <li key={i}>
            <span className={styles.category}>{skill.category}</span>
            <SkillList skillItems={skill.items}/>
          </li>
        ))}
      </ul>
    </section>
  )
};

export default Skills;