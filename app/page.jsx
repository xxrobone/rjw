import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })


export default async function Home() {


  return (
    <main className={styles.main}>
      <h2>Home</h2>
      
      <div className={styles.description}>     
        som esome
       
      </div>
    </main>
  )
}
