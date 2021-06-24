import React from 'react';
import blitvazon from '../images/projects/blitvazon.jpg';
import cloudbnb from '../images/projects/cloudbnb.jpg';
import investfolio from '../images/projects/investfolio.jpg';
import stockbot from '../images/projects/stockbot.jpg';
import portfolio from '../images/projects/portfolio.jpg';
import { GithubIcon } from '../images/svg/social-icons';

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
    description: 'A scaled photos microservice for an existing Airbnb-like lodging and hospitality application.',
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
    description: 'An investment portfolio dashboard and stock/crypto tracking application.',
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
    title: 'Stock Bot',
    description: 'A simple stock market trading bot written in node.js that executes trades based on the 20/50 simple moving average crossover strategy.',
    image: stockbot,
    stack: ['Node'],
    links: [
      {
        text: 'View Source Code',
        link: 'https://github.com/jrozal/stockbot',
        icon: <GithubIcon/>
      }
    ]
  },
  {
    title: 'Portfolio',
    description: 'My personal portfolio used to showcase my experience and achievements.',
    image: portfolio,
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