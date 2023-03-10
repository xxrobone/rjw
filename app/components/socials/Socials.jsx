import React from 'react'
import { FiLinkedin, FiGithub, FiInstagram, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion'
import Link from 'next/link';

// styles
import styles from './Socials.module.scss'

const Socials = () => {
  return (
    <motion.div className={styles.socials}
    initial={{x: -100, opacity: 0}}
      animate={{ x: 0, opacity: 1 }}
      transition={{duration: 1, delay: 2.3}}
    >
      <Link
            href='https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <FiLinkedin className={`${styles.soc_icon} ${styles.soc_item}`} />
          </Link>

          <Link
            href='https://github.com/robonexx'
            target='_blank'
            rel='noreferrer noopener'
          >
            <FiGithub className={`${styles.soc_icon} ${styles.soc_item}`} />
          </Link>
          <Link
            href='https://www.instagram.com/tonygogo_anthony/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <FiInstagram className={`${styles.soc_icon} ${styles.soc_item}`} />
          </Link>
          <Link
            href='/contact'
          >
            <FiMail className={`${styles.soc_icon} ${styles.soc_item}`} />
          </Link>

          
        </motion.div>
  )
}

export default Socials