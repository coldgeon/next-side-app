'use client';

import { getSession } from '@auth0/nextjs-auth0';
import styles from '../../styles/navigation.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const session = getSession();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home {pathname === '/' ? '🔥' : ''}</Link>
        </li>
        <li>
          <Link href="/movies">Movies {pathname === '/movies' ? '🔥' : ''}</Link>
        </li>
        <li>
          <Link href="/api/auth/login">Login {pathname === '/api/auth/login' ? '🔥' : ''}</Link>
        </li>
      </ul>
    </nav>
  );
}
