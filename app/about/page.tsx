import { Inter } from 'next/font/google'
import styles from './about.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default async function About() {

  
  return (
    <main className={styles.main}>
      <h2>About</h2>
      
    </main>
  )
}
