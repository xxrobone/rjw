'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

//styles 
import styles from './ProjectCardItem.module.scss'

const ProjectCardItem = ({title, href, github, desc, tech, image}) => {
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
                src={image}
                  alt="title"
                  priority
                width='100%'
                height='auto'
                style={{
                    maxWidth: '100%',
                    height: 'auto',
      }}
              />                  
              <h2 className={styles.card_title}>{title}</h2>
              <span className={styles.tech}>Tech: {tech}</span>
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
              <p className={styles.card_body}>
                  {desc}
              </p>
        <div className={styles.links}>
            <Link href={github} target="_blank"
                rel="noopener">Github</Link>
            <Link href={href} target="_blank" rel="noopener">Website</Link>
        </div>
    </div>
</div>
  )
}

export default ProjectCardItem