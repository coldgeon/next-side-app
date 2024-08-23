import { MOVIE_API_URL } from '@/app/constants';
import styles from '../../styles/movie-info.module.css';
import { Suspense } from 'react';
import MovieVideo from './movie-video';

async function getMovie(id: string) {
  const response = await fetch(`${MOVIE_API_URL}/${id}`);
  const json = response.json();
  return json;
}
export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt={movie.title} />
      <div>
        <h3>{movie.title}</h3>
        <h3>🌟{movie.vote_average}</h3>
        <p>{movie.overview}</p>
        <Suspense fallback={<h1>Movie video Loading...</h1>}>
          <MovieVideo id={id}></MovieVideo>
        </Suspense>
      </div>
    </div>
  );
}
