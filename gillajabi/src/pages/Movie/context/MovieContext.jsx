import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {

  const [currentPage, setCurrentPage] = useState('Moviemain');

  return (
    <MovieContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);