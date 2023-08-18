import React from 'react';
import { BusProvider } from './context/BusContext';
import BusContent from './components/BusContent';
import '../../styles/pages/Bus/Bus.css';

const Bus = () => {
  return (
    <BusProvider>
      <BusContent/>
    </BusProvider>
  );
};

export default Bus;