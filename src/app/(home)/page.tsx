import { getSession } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getSession();
  if (session?.user) {
    redirect('/dashboard');
  }

  return <h1>Welcome to Next App</h1>;
}
