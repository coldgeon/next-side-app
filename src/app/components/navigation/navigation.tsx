'use client';

import styles from '../../styles/navigation.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home {pathname === '/' ? '🔥' : ''}</Link>
        </li>
        <li>
          <Link href="/movies">Movies {pathname === '/movies' ? '🔥' : ''}</Link>
        </li>
      </ul>
    </nav>
  );
}
