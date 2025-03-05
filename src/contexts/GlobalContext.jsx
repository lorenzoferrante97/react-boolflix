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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);

  // onChange input
  const handleField = e => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  // fetch api filtered movies
  const filterMovies = () => {
    fetch(`${tmdbApiSearchMovies}&query=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        setFilteredMovies(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const value = {};

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

// custom hook
const useGlobalContext = () => useContext(GlobalContext);

// export provider + hook
export { GlobalProvider, useGlobalContext };
