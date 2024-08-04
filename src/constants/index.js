import {
  frontend,
  backend,
  datascience,
  javascript,
  python,
  html,
  css,
  reactjs,
  nodejs,
  git,
  rubyrails,
  cloud,
  voice,
  house,
  covid,
  codepath,
  headstarter,
  ezcater,
  hack,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Data Scientist',
    icon: datascience,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Fellow',
    company_name: 'Hack.Diversity',
    icon: hack, 
    iconBg: '#333333',
    date: 'January 2023 - August 2023',
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'ezCater',
    icon: ezcater, 
    iconBg: '#333333',
    date: 'May 2023 - November 2023',
  },
  {
    title: 'Tech Fellow',
    company_name: 'CodePath',
    icon: codepath, 
    iconBg: '#333333',
    date: 'March 2024 - Present',
  },
  {
    title: 'Software Engineer Fellow',
    company_name: 'Headstarter',
    icon: headstarter,
    iconBg: '#333333',
    date: 'June 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Cloud Classification',
    description: 'Classifying cloud types using CNNs, demonstrating advanced image processing.',
    tags: ['Python', 'PyTorch', 'Machine Learning'],
    image: cloud, // Placeholder for you to change
    repo: 'https://github.com/Kingtilon1/Cloud-classification',
    demo: '', // Add if available
  },
  {
    id: 'project-2',
    name: 'Speech Analysis',
    description: 'Analyzing presidential speeches with NLP and network analysis to identify key themes.',
    tags: ['Python', 'NLTK', 'NetworkX'],
    image: voice, // Placeholder for you to change
    repo: 'https://github.com/Kingtilon1/DATA620/blob/main/Final/Final.ipynb',
    demo: '', // Add if available
  },
  {
    id: 'project-3',
    name: 'House Pricing',
    description: 'Predicting house prices via regression models in a Kaggle competition.',
    tags: ['Python', 'Scikit-learn', 'Data Science'],
    image: house, // Placeholder for you to change
    repo: 'https://github.com/Kingtilon1/House-Prices-Competition',
    demo: '', // Add if available
  },
  {
    id: 'project-4',
    name: 'Property Sales',
    description: 'Exploratory data analysis on property sales to uncover market trends.',
    tags: ['R', 'ggplot2', 'Data Analysis'],
    image: house, // Placeholder for you to change
    repo: 'https://github.com/Kingtilon1/Property-Sales-Analysis',
    demo: '', // Add if available
  },
  {
    id: 'project-5',
    name: 'COVID Tracker',
    description: 'Managing COVID-19 patient data with a MERN stack to enhance reporting efficiency.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: covid, // Placeholder for you to change
    repo: 'https://github.com/Kingtilon1/COVID-Patient-Tracker',
    demo: '', // Add ff available
  },
];



export { services, technologies, experiences, projects };
