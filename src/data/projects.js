import blitvazon from '../images/projects/blitvazon.jpg';
import cloudbnb from '../images/projects/cloudbnb.jpg';
import investfolio from '../images/projects/investfolio.jpg';

export const projectsData = [
  {
    title: 'Blitvazon',
    description: 'An Amazon-like product features microservice designed with Service-Oriented Architecture.',
    image: blitvazon,
    stack: ['MongoDB', 'Express', 'React', 'Node']
  },
  {
    title: 'Cloudbnb',
    description: 'A scaled photos microservice for an existing Airbnb-like lodging and hospitality application',
    image: cloudbnb,
    stack: ['Postgres', 'Sequelize', 'Express', 'React', 'Node']
  },
  {
    title: 'Investfolio',
    description: 'An investment portfolio dashboard and stock/crypto tracking application',
    image: investfolio,
    stack: ['MySQL', 'Sequelize', 'Express', 'React', 'MaterialUI', 'Node']
  },
  {
    title: 'Portfolio',
    description: 'My personal portfolio used to showcase my experience and achievements.',
    image: null,
    stack: ['Gatsby', 'Sass', 'React', 'HTML']
  }
];