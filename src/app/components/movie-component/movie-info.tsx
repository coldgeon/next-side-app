import { MOVIE_API_URL } from '@/app/constants';

async function getMovie(id: string) {
  const response = await fetch(`${MOVIE_API_URL}/${id}`);
  const json = response.json();
  return json;
}
export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div>
      <img src={movie.poster_path} alt={movie.title} />
      <div>
        <span>{movie.title}</span>
        <span>🌟{movie.vote_average}</span>
      </div>
    </div>
  );
}
