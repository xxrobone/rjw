"use client"
import React from 'react'
import Link from 'next/link'

// styles
import styles from './btn.module.scss'
const Btn = () => {
    return (
        <Link href='/projects' 
        className={styles.enter_btn}
        >
        Check my work
        </Link>
  )
}

export default Btn