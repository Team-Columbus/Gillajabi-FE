import React from 'react';
import { useBusContext } from '../context/BusContext';
import BusMain from '../components/BusMain';
import Navbar from '../../../components/Navbar';

const BusContent = () => {

  const { currentPage } = useBusContext();

  let currentPageComponent;

  switch (currentPage) {
    case 'BusMain':
      currentPageComponent = <BusMain/>;
      break;
    default:
      currentPageComponent = <BusMain/>;
      break;
  }

  return (
    <div className='bus'>
      <Navbar />
      {currentPageComponent}
    </div>
  );
};

export default BusContent;