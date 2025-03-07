import { createContext, useState, useContext } from "react";

// create context
const GlobalContext = createContext();

// create provider
const GlobalProvider = ({ children }) => {
  // import .env variables
  const tmdbApiMoviesUrl = import.meta.env.VITE_TMDB_API_MOVIES_URL;
  const tmdbApiSeriesUrl = import.meta.env.VITE_TMDB_API_SERIES_URL;
  const tmdbApiToken = import.meta.env.VITE_TMDB_API_TOKEN;
  // build apis
  const tmdbApiSearchMovies = `${tmdbApiMoviesUrl}&api_key=${tmdbApiToken}`;
  const tmdbApiSearchSeries = `${tmdbApiSeriesUrl}&api_key=${tmdbApiToken}`;

  // useState
  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);
  // hover status on cards
  const [cardHoverState, setCardHoverState] = useState({
    activeId: 0,
    isHovered: false
  });

  // onChange input
  const handleField = e => {
    const { value } = e.target;
    console.log(value);
    setSearchValue(value);
  };

  // on submit update searchQuery
  const handleSearch = (event, value) => {
    event.preventDefault();
    console.log("handleSearch value: ", value);
    setSearchQuery(value);
  };

  // fetch api filtered movies
  const filterMovies = query => {
    fetch(`${tmdbApiSearchMovies}&query=${query}`)
      .then(response => response.json())
      .then(data => {
        setFilteredMovies(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  };
  // fetch api filtered movies
  const filterSeries = query => {
    fetch(`${tmdbApiSearchSeries}&query=${query}`)
      .then(response => response.json())
      .then(data => {
        setFilteredSeries(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // show card info on hover
  const showInfo = id => {
    setCardHoverState({ activeId: id, isHovered: true });
  };
  // hidden card info on hover
  const hiddenInfo = id => {
    setCardHoverState({ activeId: id, isHovered: false });
  };

  // BONUS

  const tmdbApiGenresUrl = import.meta.env.VITE_TMDB_API_GENRES_URL;
  // build api
  const tmdbApiGenres = `${tmdbApiGenresUrl}&api_key=${tmdbApiToken}`;

  // active genre
  const [activeGenre, setActiveGenre] = useState("all");
  const [allFilteredSeries, setAllFilteredSeries] = useState([]);
  const [activeGenreId, setActiveGenreId] = useState(0);

  // onChange select
  const handleSelect = e => {
    const { value } = e.target;
    console.log(value);
    setActiveGenre(value);
  };

  // get genre id
  const getGenreId = selectedGenre => {
    // get genre id
    fetch(`${tmdbApiGenres}`)
      .then(response => response.json())
      .then(data => {
        const genresList = data.genres;
        const foundGenre = genresList.find(
          genre => genre.name === selectedGenre
        );
        setActiveGenreId(parseInt(foundGenre.id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  // filter series by active genre
  const filterSeriesByGenre = (series, genre) => {};

  const value = {
    searchValue,
    searchQuery,
    filteredMovies,
    filteredSeries,
    handleField,
    activeGenre,
    getGenreId,
    handleSelect,
    handleSearch,
    filterMovies,
    filterSeries,
    cardHoverState,
    showInfo,
    hiddenInfo
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

// custom hook
const useGlobalContext = () => useContext(GlobalContext);

// export provider + hook
export { GlobalProvider, useGlobalContext };
