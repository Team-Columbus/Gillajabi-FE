import React, { createContext, useContext, useState } from 'react';

const BusContext = createContext();

export const BusProvider = ({ children }) => {

  const [currentPage, setCurrentPage] = useState('BusMain');

  const handlePage = (pageName) =>{
    setCurrentPage(pageName);
  };

  return (
    <BusContext.Provider value={{ currentPage, setCurrentPage, handlePage }}>
      {children}
    </BusContext.Provider>
  );
};

export const useBusContext = () => useContext(BusContext);