'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '../../styles/movie.module.css';

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
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={posterClicked}></img>
      <h4>{title}</h4>
    </div>
  );
}
