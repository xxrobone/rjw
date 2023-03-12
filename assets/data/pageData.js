import LL from '/public/images/ll_mockup.png';
import VGA from '/public/images/vga_mockup.png';
import SL from '/public/images/sl_bike_mockup.png';
import ROGER from '/public/images/rogerroger_mockup.png';
import GAMES from '/public/images/games_mockup.png';
import Week1 from 'public/images/week1.png'
import Week2 from 'public/images/week2.png'
import Week3 from 'public/images/week3.png'
import Week4 from 'public/images/week4.png'
import Week5 from 'public/images/week5.png'


export const navData = [
  {
    title: 'home',
    path: '/',
    id: 1,
  },
  {
    title: 'about',
    path: '/about',
    id: 2,
  },
  {
    title: 'projects',
    path: '/projects',
    id: 3,
  },
  {
    title: 'blog',
    path: '/blog',
    id: 4,
  },
  {
    title: 'contact',
    path: '/contact',
    id: 5,
  },
];

export const links = [
  {
    title: 'Check my website',
    href: 'https://robertwagar.se',
    image:
      '',
  },
  {
    title: 'lockerlegends',
    href: 'https://lockerlegends.org',
    image:
      '',
  },
];

export const socials = [
  {
    title: 'linkedin',
    href: 'https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/',
  },
  {
    title: 'github',
    href: 'https://github.com/robonexx',
  },
  {
    title: 'codepen',
    href: 'https://codepen.io/robonexx',
  },
];

export const projects = [
  {
    title: 'Assignment 1',
    href: 'https://rob_assignment_one.surge.sh/',
    github: 'https://github.com/xxrobone/framew_assingment1_week1_cme',
    image: Week1,
    tech: 'React with vite',
    desc: 'Frameworks course assignment 1',
  },
  {
    title: 'Assignment 2',
    href: 'https://github.com/xxrobone/framew_assingment2_week2_cme',
    github: 'https://github.com/xxrobone/framew_assingment2_week2_cme',
    image: Week2,
      tech: 'Node.js',
      desc: 'Frameworks course assignment 2',
  },
  {
    title: 'Assignment 3',
    href: 'https://massdestruction.vercel.app/',
    github: 'https://github.com/xxrobone/framew_assingment3_week3_cme',
    image: Week3,
      tech: 'React, Vite',
      desc: 'Frameworks course assignment 2',
  },
  {
    title: 'Assignment 4',
    href: 'https://framew-assingment4-week4-cme.vercel.app/',
    github: 'https://github.com/xxrobone/framew_assingment4_week4_cme',
    image: Week4,
      tech: 'React, framer-motion, styled-components',
      desc: 'Frameworks course assignment 2',
  },
  {
    title: 'Assignment 5',
    href: 'https://framew-assingment5-week5-cme.vercel.app/',
    github: 'https://github.com/xxrobone/rjw',
    image: Week5,
      tech: 'Nextjs 13.2 experimental APP, framer-motion, sass, react-icons',
      desc: 'Frameworks course assignment 5, portfolio or other project using next',
  },
  {
    title: 'Lockerlegends',
    href: 'https://lockerlegends.org',
    github: 'https://github.com/robonexx/lockerlegends2022',
    image: LL,
    tech: 'Nextjs, Wordpress, Sass, Jsx, Framer-motion, GraphQL, Siteground, Vercel',
    desc: 'This website was re-made for Lockerlegends international, a website owned by an orignal soultrain dancer and locking pioneer James Higgins, aka Skeeter Rabbit from Los Angeles, USA ',
  },
  {
    title: 'VGA',
    href: 'https://vga2023.surge.sh',
    github: 'https://github.com/robonexx/vga2023',
    image: VGA,
    tech: 'Js, Html, css, surge, figma',
    desc: 'VGA is a video game search engine and movie search engine, used rawg.io and themoviedb api:s to fetch the data',
  },
  {
    title: 'Quotes by Roger',
    href: 'https://quotesbyroger.surge.sh',
    github: 'https://github.com/xxrobone/dailyquotes',
    image: ROGER,
    tech: 'Js, Html, css, surge, figma, anime.js',
    desc: 'A quotes website for people who need funny or uplifting quotes for the day :D',
  },
  {
    title: 'SL - bikes',
    href: 'https://slappmap.surge.sh',
    github: 'https://github.com/robonexx/sl_app_ux_implementation',
    image: SL,
    tech: 'React, react-router-dom, mapbox-gl, framer-motion, scss, react-icons, styled-components, json-server, localstorage',
    desc: 'This was a project implementing ux design to a frontend prototype. To help a already existing company & to make them more eco-friendly',
  },
  {
    title: 'Games',
    href: 'https://xxrobone.github.io/gamez/',
    github: 'https://github.com/xxrobone/gamez',
    image: GAMES,
    tech: 'Javascript, html, css',
    desc: 'Assignment at CME education to create a game and host in a live site',
  },
];

/* 

maybe to use later

export const meData = [
  {  
    name: 'Robert Wägar',
    avatar:
      noImg
  }

   {
    title: 'twitter',
    href: 'https://twitter.com/Rob2da1',
  },

]; */
