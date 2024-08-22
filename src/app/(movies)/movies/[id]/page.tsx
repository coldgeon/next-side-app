import MovieInfo from '@/app/components/movie-component/movie-info';
import MovieVideo from '@/app/components/movie-component/movie-video';
import { Suspense } from 'react';

interface IMovieParams {
  params: { id: string };
}

export default function MovieDetail({ params: { id } }: IMovieParams) {
  console.log(id);
  return (
    <>
      <Suspense fallback={<h1>Movie info Loading...</h1>}>
        <MovieInfo id={id}></MovieInfo>
      </Suspense>
      <Suspense fallback={<h1>Movie video Loading...</h1>}>
        <MovieVideo id={id}></MovieVideo>
      </Suspense>
    </>
  );
}
