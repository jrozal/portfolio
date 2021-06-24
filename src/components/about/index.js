import React from 'react';
import styles from './about.module.scss';

const About = () => (
  <section className="component" id="about">
    <div className={styles.aboutWrapper}>
      <h2>Hi, I'm Justin</h2>
      <p>
        A recent software engineering coding bootcamp graduate from the San Francisco Bay Area who enjoys using logic and reason to find elegant and effective solutions to complex problems. Motivated to learn how to leverage industry-leading frameworks and approach every day as an opportunity to extend my knowledge.
        <br/><br/>
        When I’m not working or studying, I enjoy exercising, hiking, volunteering, building mechanical keyboards, and <a href="https://www.justinrozal.com" target="_blank" rel="noopener noreferrer">photography.</a>
      </p>
    </div>
  </section>
);

export default About;