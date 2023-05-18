import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// styles
import styles from './NavItem.module.scss'

export default function NavItem({ title, path, id, img, i, closeMobileMenu }) {  

  return (
    <motion.li className={styles.nav_item} key={id}
      initial={{ opacity: 0, y: i % 2 === 0 ? -1000 : 1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: i * 0.2 }}
      onClick={closeMobileMenu}
    >
      <Image
        className={styles.img}
        alt={title}
        src={img}
        width='100%'
        height='auto'
      >
        
      </Image>
          <Link className={styles.nav_link} href={path}>{title}</Link>
    </motion.li>
  )
}
