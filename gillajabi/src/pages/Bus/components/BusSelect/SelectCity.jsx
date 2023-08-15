import React from 'react';
import '../../../../styles/pages/Bus/BusSelect/SelectCity.css'

const SelectCity = (props) => {
  return (
    <div className='selectcity'>
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