import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // Import the styles

const Events = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Mock data for events
  const culturalEvents = [
    { date: new Date(2024, 2, 10), name: 'Ramadan' },
    { date: new Date(2024, 2, 15), name: 'International Womens Day' },
  ];

  // Function to check if a date has an event
  const hasEvent = (date) => {
    return culturalEvents.some(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  // Function to handle date click
  const handleDateClick = (value) => {
    const event = culturalEvents.find(event => 
      event.date.getDate() === value.getDate() &&
      event.date.getMonth() === value.getMonth() &&
      event.date.getFullYear() === value.getFullYear()
    );
    if (event) {
      setSelectedEvent(event);
      setShowPopup(true);
    }
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Custom tile content function to display emoji alert
  const tileContent = ({ date, view }) => {
    if (view === 'month' && hasEvent(date)) {
      return <span>📅</span>;
    }
    return null;
  };

  return (
    <>
      <div className="calendar-container">
        <Calendar 
          onClickDay={handleDateClick} 
          tileContent={tileContent} // Add custom tile content for emoji alert
        />
      </div>
      {showPopup && selectedEvent && (
        <div className="popup">
          <button className="close-button" onClick={handleClosePopup}>
            Close
          </button>
          <h3>{selectedEvent.name}</h3>
          <p>
            There is currently no planned activity for {selectedEvent.name}.
          </p>
          <p>Check out our support pack for {selectedEvent.name}!</p>
          <div className="support-buttons">
            <button>£</button>
            <button>££</button>
            <button>£££</button>
          </div>
          <p>Add a reminder for a later date. (Reminder icon)</p>
        </div>
      )}
    </>
  );
};

export default Events;
