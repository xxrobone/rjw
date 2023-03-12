import ProjectCardItem from '../components/projectCardItem/ProjectCardItem'
import { projects } from '@/assets/data/pageData'

// styles
import styles from './projects.module.scss'

export default async function Projects() {

    return (
      <>
    <main className={styles.main}>
         <h2>Framework course assignments <br/></h2>          
          <div className={styles.projects_wrapper}>
          {projects.filter(p => p.title.includes('Assignment')).map(({ title, href, github, image, tech, desc }) => (
              <ProjectCardItem key={href} title={title} href={href} image={image} github={github} tech={tech} desc={desc} />             
      ))}  
          </div>
          <h2>& <br />Projects</h2>
          <div className={styles.projects_wrapper}>
          {projects.filter(p => !p.title.includes('Assignment')).map(({ title, href, github, image, tech, desc }) => (
              <ProjectCardItem key={href} title={title} href={href} image={image} github={github} tech={tech} desc={desc} />             
      ))}  
          </div>
    </main>
      </>
  )
}
