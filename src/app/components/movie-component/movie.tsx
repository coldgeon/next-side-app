'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface IMovieProps {
  id: string;
  poster_path: string;
  title: string;
}

export default function Movie({ id, poster_path, title }: IMovieProps) {
  const router = useRouter();

  const posterClicked = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div>
      <img src={poster_path} alt={title} onClick={posterClicked}></img>
      <h3>{title}</h3>
    </div>
  );
}
