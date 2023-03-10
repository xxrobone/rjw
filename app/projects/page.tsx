import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './projects.module.scss'


const inter = Inter({ subsets: ['latin'] })

export default async function Contact() {

  return (
    <main className={styles.main}>
      <h2>Projects</h2>
      
      <div className={styles.description}>     
        some projects
       
      </div>
    </main>
  )
}
