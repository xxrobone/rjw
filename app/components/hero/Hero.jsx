'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useWindowSize from '../../hooks/useWindowSize';
// styles
import styles from './Hero.module.scss';

const Vid = () => (
  <div className={styles.video}>
  <video autoPlay loop muted playsInline>
    <source src='/colors.mp4' type='video/mp4' />
  </video>
  </div>
);

const parentVariant = {
  initial: { y: 800 },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildre: 0.3,
    },
  },
};

const childVariant = {
  initial: { y: 800 },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.5, 0.04, -0.01, 0.8],
    },
  },
};

const Hero = () => {
  const size = useWindowSize();
  const [currentT, setCurrent] = useState('#000');

  let canvas = useRef(null);
  useEffect(() => {
    let renderingElement = canvas.current;
    // create an offscreen canvas only for the drawings
    let drawingElement = renderingElement.cloneNode();
    let drawingCtx = drawingElement.getContext('2d');
    let renderingCtx = renderingElement.getContext('2d');
    let lastX;
    let lastY;
    let moving = false;

    renderingCtx.globalCompositeOperation = 'source-over';
    renderingCtx.fillStyle = '#000000';
    renderingCtx.fillRect(0, 0, size.width, size.height);

    renderingElement.addEventListener('mouseover', (ev) => {
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener('click', (ev) => {
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener('mouseup', (ev) => {
      moving = false;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener('mousemove', (ev) => {
      if (moving) {
        drawingCtx.globalCompositeOperation = 'source-over';
        renderingCtx.globalCompositeOperation = 'destination-out';
        let currentX = ev.pageX - renderingElement.offsetLeft;
        let currentY = ev.pageY - renderingElement.offsetTop;
        drawingCtx.lineJoin = 'round';
        drawingCtx.moveTo(lastX, lastY);
        drawingCtx.lineTo(currentX, currentY);
        drawingCtx.closePath();
        drawingCtx.lineWidth = 80;
        drawingCtx.stroke();
        lastX = currentX;
        lastY = currentY;
        renderingCtx.drawImage(drawingElement, 0, 0);
      }
    });
  }, [currentT]);
  return (
    <motion.div className={styles.hero}>
      <canvas
        className={styles.canvas}
        ref={canvas}
        height={size.height}
        width={size.width}
      ></canvas>
      <Vid />
      <motion.h1
        className={styles.title}
        variants={parentVariant}
        initial='initial'
        animate='animate'
      >
        Rupert
        <motion.span
          variants={childVariant}
          initial='initial'
          animate='animate'
        >
          Von
        </motion.span>
        <motion.span
          variants={childVariant}
          initial='initial'
          animate='animate'
        >
          Code
        </motion.span>
      </motion.h1>
    </motion.div>
  );
};

export default Hero;
