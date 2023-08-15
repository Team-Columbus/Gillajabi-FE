import {React, useState} from 'react'
import Calendar from 'react-calendar';
import '../../../../styles/pages/Bus/BusSelect/SelectCalendar.css';

const SelectCalendar = (props) => {
  
  const handleDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    props.changeDate(date.toLocaleDateString('ko-KR', options));
    props.move(false);
  }
  
  return (
    <div className='selectcalendar'>
      <div className='selectcalendar-title'>
          출발일자를 선택하세요
      </div>
      <div className='selectcalender-calendar'>
        <Calendar onClickDay={handleDate}  />
      </div>
    </div>
  );
};

export default SelectCalendar;