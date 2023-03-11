'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import IMG from '/public/images/ll_mockup.png'

//styles 
import styles from './ProjectCardItem.module.scss'

const ProjectCardItem = () => {

    const [isOpen, setIsOpen] = useState(false)

    const ReadMore = () => {
        console.log('clicked ')
        setIsOpen(true)
    }
    const ReadLess = () => {
        setIsOpen(false)
    }

  return (
    <div className={styles.card}>
          <div className={isOpen ? `${styles.card_header} ${styles.card_open}` : `${styles.card_header}`}
          >
                  <Image 
                      className={styles.card_img}
                src={IMG}
                  alt="title"
                  priority
                width='100%'
                height='auto'
                style={{
                    maxWidth: '100%',
                    height: 'auto',
      }}
              />                  
        <h2 className={styles.card_title}>LockerLegends</h2>
        <span className={styles.tech}>Tech: Nextjs, Wordpress, Sass, Jsx, Framer-motion, GraphQL, Siteground,
            Vercel</span>
              <button className={isOpen ? `${styles.card_more_info} ${styles.more_open}` : `${styles.card_more_info}`}
              onClick={ReadMore}
              >
                  Read more
              </button>
              <button className={isOpen ? `${styles.card_more_info} ${styles.less_open}` : `${styles.card_less_info}`}
                  onClick={ReadLess}
              >
                  Close info
              </button>
    </div>
          <div className={isOpen ? `${styles.card_content} ${styles.open}` : `${styles.card_content}`}
          >
              <p className={styles.card_body}>This website was re-made for Lockerlegends international, a website
            owned
            by an orignal soultrain dancer and locking pioneer James Higgins, aka &quot;Skeeter Rabbit&quot;
            from Los Angeles, USA </p>
        <div className={styles.links}>
            <Link href="https://github.com/robonexx/lockerlegends2022" target="_blank"
                rel="noopener">Github</Link>
            <Link href="https://lockerlegends.org/" target="_blank" rel="noopener">Website</Link>
        </div>
    </div>
</div>
  )
}

export default ProjectCardItem