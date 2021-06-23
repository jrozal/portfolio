import React from 'react';
import blitvazon from '../images/projects/blitvazon.jpg';
import cloudbnb from '../images/projects/cloudbnb.jpg';
import investfolio from '../images/projects/investfolio.jpg';
import { GithubIcon, EmailIcon, LinkedInIcon } from '../images/svg/social-icons';

export const projectsData = [
  {
    title: 'Blitvazon',
    description: 'An Amazon-like product features microservice designed with Service-Oriented Architecture.',
    image: blitvazon,
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    links: [
      {
        text: 'View Source Code',
        link: 'https://github.com/jrozal/product-features-blitvazon',
        icon: <GithubIcon/>
      }
    ]
  },
  {
    title: 'Cloudbnb',
    description: 'A scaled photos microservice for an existing Airbnb-like lodging and hospitality application',
    image: cloudbnb,
    stack: ['Postgres', 'Sequelize', 'Express', 'React', 'Node'],
    links: [
      {
        text: 'View Source Code',
        link: 'https://github.com/jrozal/system-design-cloudbnb',
        icon: <GithubIcon/>
      }
    ]
  },
  {
    title: 'Investfolio',
    description: 'An investment portfolio dashboard and stock/crypto tracking application',
    image: investfolio,
    stack: ['MySQL', 'Sequelize', 'Express', 'React', 'MaterialUI', 'Node'],
    links: [
      {
        text: 'View Source Code',
        link: 'https://github.com/jrozal/investfolio',
        icon: <GithubIcon/>
      }
    ]
  },
  {
    title: 'Portfolio',
    description: 'My personal portfolio used to showcase my experience and achievements.',
    image: null,
    stack: ['Gatsby', 'Sass', 'React', 'HTML'],
    links: [
      {
        text: 'View Source Code',
        link: 'https://github.com/jrozal/portfolio',
        icon: <GithubIcon/>
      }
    ]
  }
];