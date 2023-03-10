import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// styles
import styles from './LinkCard.module.scss'

export default function LinkCard({ href, title, github, image }) {
  
  return (    
    <>
      <div className={styles.card}>
        <div className={styles.img}>
          <Image          
            fill
            priority
            alt={title}
            src={image}
          />

        </div>
        <div className={styles.info}>
          <h2>{title}</h2>
          <Link href={href} target="_blank" rel="noreferrer">Demo</Link>
          <Link href={github} target="_blank" rel="noreferrer">Github</Link>
        </div>
      </div>
    </>
    )
  }