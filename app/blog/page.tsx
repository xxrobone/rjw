import Image from 'next/image'
import styles from './blog.module.scss'
import { createClient, groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'

const clientConfig = {
  projectId: process.env.SANITY_STUDIO_ID,
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

export default async function Blog () {

    const blogs = await getPortfolio();
    
  return (
    <main className={styles.main}>
      <h2>Blog:</h2>
      
      <div className={styles.description}>     
        
        {blogs.map((b: any) => (
         
            <div className={styles.blogpost} key={b._id}>
            <h2>{b.name}</h2>
              <Image
                className={styles.img}
              src={b.image}
              alt={b.alt}
                width={400}
                height={400}
              />
              <PortableText value={b.content} />
            </div>
        ))}
      </div>
    </main>
  )
}
