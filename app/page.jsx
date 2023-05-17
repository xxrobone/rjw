import styles from './page.module.scss'
import Hero from './components/hero/Hero'
import { motion } from 'framer-motion'
import HomeGrid from './components/homecontent/HomeGrid'


export default async function Home() {

  return (
    <main className={styles.main}>
      {/*  <Hero /> */}
      <HomeGrid />
    </main>
  )
}
