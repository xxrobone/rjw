"use client"
import React from 'react'
import { motion } from 'framer-motion'
import IMG1 from '/public/images/coffee.jpg';
import IMG2 from '/public/images/knowledge.jpg';
import IMG3 from '/public/images/casette.jpg';
import IMG4 from '/public/images/rainy.jpg';
import IMG5 from '/public/images/acecards.jpg';
import IMG6 from '/public/images/street.jpg';
import IMG7 from '/public/images/disconnected.jpg';
import ImageWrapper from '../ImageWrapper/ImageWrapper'
// styles
import styles from './HomeGrid.module.scss'

const Variants = {
  open: {
    marginTop: 0,
    transition: {
        duration: 1,
        delay: 3
    }
  },
  closed: {
    marginTop: '100svh',
  }
};

const imgData = [
    {
        id: 1,
        img: IMG1,
        title: 'Coffee',
        desc: '& Code'
    },
    {
        id: 2,
        img: IMG2,
        title: 'Knowledge',
        desc: 'is power'
    },
    {
        id: 3,
        img: IMG3,
        title: 'Music',
        desc: 'is life'
    },
    
]
const imgData2 = [
    {
        id: 5,
        img: IMG4,
        title: 'Rain',
        desc: 'fresh air'
    },
    {
        id: 6,
        img: IMG5,
        title: 'Ace Duce',
        desc: 'got the props'
    },
    {
        id: 7,
        img: IMG6,
        title: 'Big City',
        desc: 'streets'
    },
    {
        id: 8,
        img: IMG7,
        title: 'Disconnected',
        desc: 'from the matrix'
    },
]

const HomeGrid = () => {
  return (
      <motion.div className={styles.content_wrapper}
          variants={Variants}
          initial='closed'
          animate='open'
      >
    <section className={`${styles.section} ${styles.top}`}>
          <p>
              I&apos;m a developer with focus on creating smart
              user interfaces & useful interactions
              <br/>
              <br/>
              My design is equally about
              what it does
              as much as how it attracts the eye
          </p>
          <p>
              If you are looking for a developer to bring your ideas to life, You have come to the right place <br/>
              <br/>
              As a developer I &apos; m focused on finding the best solutions for you problems/ needs
              by developing rich web experiences & applications for your users
              <br/>
          </p>
      </section>
    <section className={`${styles.section} ${styles.top}`}>
         <ImageWrapper />
      </section>
    <section className={`${styles.section} ${styles.top}`}>
    <p>
              I&apos;m a developer with focus on creating smart
              user interfaces & useful interactions
              <br/>
              <br/>
              My design is equally about
              what it does
              as much as how it attracts the eye
          </p>
          <p>
              If you are looking for a developer to bring your ideas to life, You have come to the right place <br/>
              <br/>
              As a developer I &apos; m focused on finding the best solutions for you problems/ needs
              by developing rich web experiences & applications for your users
              <br/>
          </p>
      </section>
    <section className={`${styles.section} ${styles.top}`}>
        
      </section>
    </motion.div>
  )
}

export default HomeGrid