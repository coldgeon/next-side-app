import { MOVIE_API_URL } from '@/app/constants';

async function getVideos(id: string) {
  const response = await fetch(`${MOVIE_API_URL}/${id}/videos`);
  const json = response.json();
  return json;
}

export default async function MovieVideo({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div>
      {videos.slice(0, 3).map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.title}
          allow="accelerometer; autoplay: clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
