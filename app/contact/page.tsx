import styles from './contact.module.scss'
import { socials } from '@/assets/data/pageData'
import LinkCard from '../components/linkcard/LinkCard'

export default async function Contact() {

  return (
    <main className={styles.main}>
      <h2>Contact</h2>
      
      <h4>Connect with me thru my socials</h4>
      <div className={styles.links}>
            {socials.map(({ title, href}) => (
              <LinkCard key={href} title={title} href={href} />             
      ))}
        
      </div>
      <div className={styles.description}>     
        Form?
       
      </div>
    </main>
  )
}
