import React from 'react';
import { useBusContext } from '../context/BusContext';
import BusMain from '../components/BusMain';
import BusSelect from '../components/BusSelect';
import BusDestination from '../components/BusDestination';
import BusTime from '../components/BusTime';
import BusSeat from '../components/BusSeat';
import BusPayment from '../components/BusPayment';
import BusFinish from '../components/BusFinish';
import Navbar from '../../../components/Navbar';

const BusContent = () => {

  const { currentPage } = useBusContext();

  let currentPageComponent;

  switch (currentPage) {
    case 'BusMain':
      currentPageComponent = <BusMain/>;
      break;
    case 'BusSelect':
      currentPageComponent = <BusSelect/>;
      break;
    case 'BusDestination':
      currentPageComponent = <BusDestination/>;
      break;
    case 'BusTime':
      currentPageComponent = <BusTime/>;
      break;
    case 'BusSeat':
      currentPageComponent = <BusSeat/>;
      break;
    case 'BusPayment':
      currentPageComponent = <BusPayment/>;
      break;
    case 'BusFinish':
      currentPageComponent = <BusFinish/>;
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