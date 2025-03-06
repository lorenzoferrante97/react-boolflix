import { GlobalProvider, useGlobalContext } from "../contexts/GlobalContext";
import { DE, ES, FR, GB, IT } from "country-flag-icons/react/3x2";
import { Star } from "@phosphor-icons/react";

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
  const posterFallbackUrl =
    "https://placehold.co/400x600/jpg/red/?text=No+Image&font=Poppins";

  const cardBg = {
    backgroundImage: `url(${posterUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  const fallbackBg = {
    backgroundImage: `url(${posterFallbackUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  // array stars
  const rating = [
    <Star size={16} weight='bold' color='yellow' />,
    <Star size={16} weight='bold' color='yellow' />,
    <Star size={16} weight='bold' color='yellow' />,
    <Star size={16} weight='bold' color='yellow' />,
    <Star size={16} weight='bold' color='yellow' />
  ];

  // conversione voto da scala 10 a scala 5
  const starRating = parseInt((vote_average.toFixed(0) * 5) / 10);

  return (
    <>
      <div
        className='relative z-10 flex aspect-[2/3] w-full flex-col overflow-hidden rounded-lg'
        style={
          poster_path == "null" || poster_path == undefined
            ? fallbackBg
            : cardBg
        }
        onMouseEnter={() => showInfo(id)}
        onMouseLeave={() => hiddenInfo(id)}>
        {/* card info on hover */}
        <div
          className={
            isHovered && activeId === id
              ? "p-3u gap-3u absolute z-20 flex h-full w-full flex-col rounded-lg border border-red-400/50 bg-black/70 backdrop-blur transition-all"
              : "invisible"
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
            <p className='font-body-s-light text-red-300'></p>
          </div>
          {/* lang */}
          <div className='gap-u flex flex-col'>
            <p className='font-body-s-regular text-white uppercase'>
              Lingua originale
            </p>
            <p className='font-body-s-light text-red-300'>
              {original_language.toLowerCase() === "en" ? (
                <GB title={original_language} className='max-w-7u' />
              ) : original_language.toLowerCase() === "it" ? (
                <IT title={original_language} className='max-w-7u' />
              ) : original_language.toLowerCase() === "de" ? (
                <DE title={original_language} className='max-w-7u' />
              ) : original_language.toLowerCase() === "es" ? (
                <ES title={original_language} className='max-w-7u' />
              ) : original_language.toLowerCase() === "fr" ? (
                <FR title={original_language} className='max-w-7u' />
              ) : (
                original_language
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
