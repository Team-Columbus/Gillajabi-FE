import React from 'react';
import '../../../../styles/pages/Bus/BusSelect/SelectCity.css'

const SelectCity = (props) => {
  const changePage = props.func || (() => null);

  return (
    <div className='selectcity' onClick={() => changePage('BusDestination')}>
      <div className='selectcity-text'>
        <img src={props.img}/>
        {props.text}
      </div>
      <div className='selectcity-city'>
        {props.city}
      </div>
    </div>
  );
};

export default SelectCity;