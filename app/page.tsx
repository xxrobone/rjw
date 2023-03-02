import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { createClient, groq } from 'next-sanity'

const inter = Inter({ subsets: ['latin'] })

const clientConfig = {
  projectId: '',
  dataset: 'production',
  useCdn: false,
};

// using groc instaed of grapQl or rest api
function getPortfolio() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "blog"]{
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      content,
    }
  `);
}

export default async function Home() {

  const blogs = await getPortfolio();
  return (
    <main className={styles.main}>
      <h2>Blog:</h2>
      
      <div className={styles.description}>     
        
        {blogs.map((b) => (
         
            <div className={styles.blogpost} key={b._id}>
            <h2>{b.name}</h2>
              <img
                className={styles.img}
              src={b.image}
              alt={b.alt}
                width={400}
                height={400}

              />
              <p>{b.content.text}</p>
            </div>
        ))}
      </div>
    </main>
  )
}
