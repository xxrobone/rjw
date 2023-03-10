import { Inter } from 'next/font/google'
import styles from './contact.module.scss'


const inter = Inter({ subsets: ['latin'] })

export default async function Contact() {

  return (
    <main className={styles.main}>
      <h2>Contact</h2>
      
      <div className={styles.description}>     
        som esome
       
      </div>
    </main>
  )
}
