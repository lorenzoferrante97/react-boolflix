import { createContext, useState, useContext } from "react";

// create context
const GlobalContext = createContext();

// create provider
const GlobalProvider = ({ children }) => {
  // useState
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);

  // onChange input
  const handleField = e => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const value = {};

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

// custom hook
const useGlobalContext = () => useContext(GlobalContext);

// export provider + hook
export { GlobalProvider, useGlobalContext };
