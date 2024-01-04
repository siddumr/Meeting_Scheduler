// MyCalendar.js

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    // Handle date change logic here
    setDate(newDate);
  };

  return (
    <div style={{marginLeft:'100px',marginTop:'100px',marginBottom:'50px'}}>
      <h1>Schedule Meeting</h1>
      <br></br>
      <Calendar onChange={handleDateChange} value={date} />
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
}

export default MyCalendar;
