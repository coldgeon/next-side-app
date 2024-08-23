import MovieInfo from '@/app/components/movie-component/movie-info';
import MovieVideo from '@/app/components/movie-component/movie-video';
import { Suspense } from 'react';
import styles from '../../../styles/movie-id-page.module.css';

interface IMovieParams {
  params: { id: string };
}

export default function MovieDetail({ params: { id } }: IMovieParams) {
  return (
    <div className={styles.container}>
      <Suspense fallback={<h1>Movie info Loading...</h1>}>
        <MovieInfo id={id}></MovieInfo>
      </Suspense>
    </div>
  );
}
