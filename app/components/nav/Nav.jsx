'use client'
import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation';
import MenuBtn from '../menuBtn/MenuBtn'
import NavItem from './NavItem';
import { navData } from '@/assets/data/pageData';

// styles
import styles from './Nav.module.scss'

export default function Nav() {
  const [active, setActive] = useState(false);
    
  /* const pathname = usePathname(); */

  const closeMobileMenu = useCallback(() => {
    setActive(false);
  }, []);
/* 
  useEffect(() => {
    // subscribe to next/router event
    events.on('routeChangeStart', closeMobileMenu);
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off('routeChangeStart', closeMobileMenu);
    };
  }, [closeMobileMenu, pathname]); */
  
  return (
    <nav className={styles.nav}>
    <ul className={`${styles.menu} ${active ? styles.open : ''}`}>
    {navData.map(({ title, path, cls, id }, i) => (
            <NavItem title={title} path={path} cls={cls} key={id} i={i} closeMobileMenu={closeMobileMenu}/>
          ))}   
    </ul>
    <MenuBtn active={active} setActive={setActive}/>
</nav>
);
}
  