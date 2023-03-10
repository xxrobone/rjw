import Link from 'next/link';

// styles
import styles from './about.module.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <>
            <nav className={styles.nav}>                
                    <Link href='#developer'>Developer</Link>
                    <Link href='#dancer'>Dancer</Link>
            </nav>
        <main>              
            {children}       
        </main>
      </>
  )
}
