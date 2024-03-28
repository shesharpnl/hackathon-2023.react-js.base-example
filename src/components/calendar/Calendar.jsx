import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the styles

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const culturalEvents = [
    { date: new Date(2024, 2, 10), name: 'Art Exhibition' },
    { date: new Date(2024, 2, 15), name: 'Cultural Festival' },
  ];

  const eventDates = culturalEvents.map(event => event.date);

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const isEventDay = eventDates.some(eventDate => 
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
      return isEventDay ? <p>🎉</p> : null;
    }
  };

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <h2>My Calendar</h2>
      <Calendar 
        onChange={onChange} 
        value={date} 
        tileContent={tileContent} // Custom tile content to display events
      />
    </div>
  );
}

export default MyCalendar;
