import { GlobalProvider, useGlobalContext } from "../contexts/GlobalContext";

export default function Card(props) {
  const { cardHoverState, showInfo, hiddenInfo } = useGlobalContext();

  // destructuring hover state
  const { activeId, isHovered } = cardHoverState;

  // destructuring props
  const movie = props.content;
  // destructuring movie
  const {
    id,
    poster_path,
    title,
    original_title,
    overview,
    vote_average,
    original_language
  } = movie;
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
        className='relative z-10 flex aspect-[2/3] w-full flex-col overflow-hidden rounded-lg'
        style={cardBg}
        onMouseEnter={() => showInfo(id)}
        onMouseLeave={() => hiddenInfo(id)}>
        {/* card info on hover */}
        <div
          className={
            isHovered && activeId === id
              ? "p-3u gap-3u absolute z-20 flex h-full w-full flex-col rounded-lg border border-red-400/50 bg-black/70 backdrop-blur"
              : "hidden"
          }>
          {/* title */}
          <h3 className='font-body-l-bold'>{title}</h3>
          {/* original title */}
          <div className='gap-u flex flex-col'>
            <p className='font-body-s-regular text-white uppercase'>
              Titolo originale
            </p>
            <p className='font-body-s-light text-red-300'>{original_title}</p>
          </div>
          {/* rating */}
          <div className='gap-u flex flex-col'>
            <p className='font-body-s-regular text-white uppercase'>Voto</p>
            <p className='font-body-s-light text-red-300'>{vote_average}</p>
          </div>
          {/* lang */}
          <div className='gap-u flex flex-col'>
            <p className='font-body-s-regular text-white uppercase'>
              Lingua originale
            </p>
            <p className='font-body-s-light text-red-300'>
              {original_language}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
