import React from 'react';

const FreeTierIWD = () => {
  const handlePosterClick = () => {
    // Handle clicking on the poster option
    // You can implement the functionality to display the poster image here
  };

  return (
    <div className="free-tier-checklist">
      <div className="left-box">
        <h2>Your Free Tier Check-list</h2>
        <ul>
          <li>Create a poster to share around your workplace</li>
          <li>Add a LinkedIn post using one of our templates</li>
          <li>Check out free events in the area to bring your colleagues to</li>
        </ul>
      </div>
      <div className="right-box">
        {/* Placeholder for poster image */}
        {/* Implement logic to display poster image */}
      </div>
    </div>
  );
};

export default FreeTierIWD;
