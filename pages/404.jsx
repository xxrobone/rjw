import Link from 'next/link';
//import styles
import styles from './PageNotFound.module.css';

export default function PageNotFound() {
  return (
    <div className={styles.pagenotfound}>
      <h1>404 PAGE NOT FOUND</h1>
        <Link href='/'>Go back</Link>
    </div>
  );
}
