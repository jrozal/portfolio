import React from 'react';
import styles from './about.module.scss';

const About = () => (
  <section className="component">
    <div className={styles.aboutWrapper}>
      <h2>Hi, I'm Justin</h2>
      <p>
        A recent software engineering coding bootcamp graduate from the San Francisco Bay Area who enjoys using logic and reason to find elegant and effective solutions to complex problems. Motivated to learn how to leverage industry-leading frameworks and approach every day as an opportunity to extend my knowledge.
      </p>
    </div>
  </section>
);

export default About;