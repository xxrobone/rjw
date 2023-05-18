'use client';
import React from 'react';
import { motion } from 'framer-motion';

// styles
import styles from './Hero.module.scss';

const Vid = () => (
  <video
    autoPlay
    loop
    muted
    playsInline
    fill
    className={styles.video}
  >
    <source src='/earth.webm' type='video/mp4' />
  </video>
);

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Vid />
      <h1 className={styles.title}>
        Rupert<span>Von</span>
        <span>Code</span>
      </h1>
    </div>
  );
};

export default Hero;
