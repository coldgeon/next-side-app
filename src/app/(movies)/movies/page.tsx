import Movie from '@/app/components/movie-component/movie';
import { MOVIE_API_URL } from '@/app/constants';
import styles from '../../styles/movie-page.module.css';

async function getMovies() {
  const response = await fetch(MOVIE_API_URL);
  const json = await response.json();
  return json;
}

export default async function Movies() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}></Movie>
      ))}
    </div>
  );
}
