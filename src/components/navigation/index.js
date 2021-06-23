import React from 'react';
import styles from './navigation.module.scss';
import scrollTo from 'gatsby-plugin-smoothscroll';

const components = [
  'about',
  'skills',
  'projects'
];

const Navigation = () => {

  return (
    <nav className={styles.navigation}>
      <ul className={styles.links}>
        {components.map((component, i) => (
          <li className={styles.link} key={i}>
            <button onClick={() => scrollTo(`#${component}`)}>
              {component}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Navigation;