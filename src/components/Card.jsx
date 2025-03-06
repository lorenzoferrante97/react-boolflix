export default function Card(props) {
  // destructuring props
  const movie = props.content;
  // destructuring movie
  const { id, poster_path, title, overview, vote_average } = movie;
  // import image url
  const posterBaseUrl = import.meta.env.VITE_TMDB_API_POSTER_URL;
  const posterUrl = `${posterBaseUrl}${poster_path}`;

  const cardBg = {
    backgroundImage: `url(${posterUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <>
      <div
        className='p-3u flex aspect-[2/3] w-full flex-col overflow-hidden rounded-lg border-4 border-white/20'
        style={cardBg}></div>
    </>
  );
}
