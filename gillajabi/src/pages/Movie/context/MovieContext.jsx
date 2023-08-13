import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {

  const [currentPage, setCurrentPage] = useState('Moviemain');

  const handlePage = (pageName) =>{
    setCurrentPage(pageName);
  };

  return (
    <MovieContext.Provider value={{ currentPage, setCurrentPage, handlePage }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);