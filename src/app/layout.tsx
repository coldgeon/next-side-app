//root layout

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/navigation/navigation';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'next movie app',
  description: '사이드로 진행하는 영화 앱이에용 이것저것 존나 추가 할겁니당',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <Navigation />
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
