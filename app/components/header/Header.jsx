'use client'
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion'
import Nav from '../nav/Nav'
import NavItem from '../nav/NavItem'
import { FiHome } from 'react-icons/fi'

// styles
import styles from './Header.module.scss'

const variants = {
  notVisible: { opacity: 0, x: '-100%' },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
  onHover: {
    originX: 0,
    scale: [1, 1.4, 1.2],
    rotate: [0, 10, -10, 0],
    transition: { type: 'spring', stiffness: 120 },
  },
  fly: {
    opacity: 1,
    scale: [1, 1, 1, 1, 1, 1, 1.4, 1.2, 1, 1, 1, 1],
    rotate: [0, 0, 0, 0, 0, 0, 360, 180, 0, 0, 0],
    x: [1, -2, 1, -1, 1, -1, 0, 200, 200, 300],
    y: [1, -1, 1, -1, 1, 0, 0, 0, -300, -300],
    /* x: [0, 2, 0, 2, 0, 10, 40, 100, 1000],
    y: [0, 0, 0, 0, 0, 0, 40, 100, 1000], */
    transition: { duration: 1, type: 'spring', stiffness: 120 },
  },
};


export default function Header(props) {

  const [clicked, setClicked] = useState(false);


  return (
    
    <header className={styles.header}>
      <Link href='/'>
          <motion.div
            variants={variants}
            initial='notVisible'
            animate={clicked ? 'fly' : 'visible'}
            whileHover={variants.onHover}
            onDoubleClick={() => {
              setClicked((clicked) => !clicked);
            }}
          >
            <FiHome />
          </motion.div>
      </Link>
      <Nav>
        
        </Nav>
      {props.children}
      <motion.hr className={styles.border_bottom}
      initial={{width: '0%'}}
      animate={{delay: 1.2,
        width: '100%',
          ease: 'easeInOut'
        }}
        transition={{duration: 1.6, delay: 0.3, ease: 'easeInOut'}}
      />
    </header>

  )
}
