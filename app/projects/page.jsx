import styles from './projects.module.scss'
import ProjectCardItem from '../components/projectCardItem/ProjectCardItem'
import LinkCard from '../components/linkcard/LinkCard'
import { projects } from '@/assets/data/pageData'


export default async function Projects() {

    return (
      <>
    <main className={styles.main}>
          <h2>Projects</h2>
          
          <div className={styles.projects_wrapper}>
            <ProjectCardItem />
          </div>

      <div className=''>
            {projects.map(({ title, href, github, image }) => (
              <LinkCard key={href} title={title} href={href} image={image} github={github} />             
      ))}
        
      </div>
    </main>
      </>
  )
}
