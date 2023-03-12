import styles from './page.module.scss'
import Hero from './components/hero/Hero'
import Content from './components/homecontent/Content'




export default async function Home() {

  return (
    <main className={styles.main}>
      <Hero />
      <Content />
    </main>
  )
}
