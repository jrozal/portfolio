import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import styles from './project-card.module.scss';
import SkillItem from '../../skills/skill-item';

const ProjectCard = ({ project }) => {
  const [flip, setFlip] = useState(false);

  return (
    <article className={styles.cardWrapper}>
      <button
        className={`${styles.card} ${flip ? styles.cardFlip : null}`}
        onMouseEnter={!isMobile ? () => setFlip(true) : null}
        onMouseLeave={!isMobile ? () => setFlip(false) : null}
        onClick={() => setFlip(!flip)}
      >
        <div className={`${styles.cardSide} ${styles.cardFront}`}>
          <img src={project.image} alt={project.title}></img>
          <div className={styles.projectDescription}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <span className={styles.hoverForMore}>
            {isMobile ? 'Tap' : 'Hover'} for more
          </span>
        </div>
        <div className={`${styles.cardSide} ${styles.cardBack}`}>
          <div className={styles.techStackWrapper}>
            <span className={styles.techStackTitle}>Tech Stack</span>
            <ul className={styles.techStackList}>
              {project.stack.map((tech, i) => (
                <SkillItem key={i} skill={tech}/>
              ))}
            </ul>
          </div>
          <div className={styles.links}>
            {project.links.map((link, i) => (
              <a
                key={i}
                className={styles.button}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label=""
              >
                <span>{link.text}</span>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </button>
    </article>
  )
};

export default ProjectCard;