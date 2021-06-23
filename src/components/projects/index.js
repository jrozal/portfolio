import React from 'react';
import { projectsData } from '../../data/projects';
import ProjectCard from './project-card';
import styles from './projects.module.scss';

const Projects = () => (
  <section className="component" id="projects">
    <div>
      <h2>Personal Projects</h2>
    </div>
    <div className={styles.projects}>
      {projectsData.map((project, i) => (
        <ProjectCard
          key={i}
          project={project}
        />
      ))}
    </div>
  </section>
);

export default Projects;