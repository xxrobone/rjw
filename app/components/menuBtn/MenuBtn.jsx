import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

// styles
import styles from './MenuBtn.module.scss'

const MenuBtn = ({active, setActive}) => {
   /*  const [active, setActive] = useState(false) */
    
    const onClickHandler = () => {
        setActive(!active)
        console.log(active)
    }

  return (
    <motion.div className={styles.hamburger_wrapper} onClick={(e) => onClickHandler()}>
          <div className={`${styles.hamburger} ${active ? styles.active : ''}`} id="hamburger">
                <span></span>
                <span></span>
                <span></span>
      </div>
      <AnimatePresence>
      {active ? (
       <motion.p className={styles.para}
       initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 30, rotate: 25 }}
            exit={{opacity: 0, y: 100}}
       transition={{duration: 0.3, delay: 0.2}}
     >Menu</motion.p>
      ) : null}
      </AnimatePresence>
     
        </motion.div>
  )
}

export default MenuBtn