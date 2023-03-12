import styles from './page.module.scss'
import Link from 'next/link'

const CallToAction = () => {

  return (
    <>
      <button className={styles.btn}>
        <Link href='/projects'>
        Check my work
        </Link>        
      </button>
    </>
  )
}

export default async function Home() {

  return (
    <main className={styles.main}>
      <h2>Hi there,</h2>
      <section className={`${styles.section} ${styles.top}`}>
            <p>
                I&apos;m a developer with focus on creating smart
                user interfaces & useful interactions
                <br/>
                <br/>
                My design is equally about
                what it does
                as much as how it attracts the eye
            </p>
            <p>
                If you are looking for a developer to bring your ideas to life, You have come to the right place <br/>
                <br/>
                As a developer I &apos; m focused on finding the best solutions for you problems/ needs
                by developing rich web experiences & applications for your users
                <br/>
            </p>
        </section>
          <CallToAction />
    </main>
  )
}
