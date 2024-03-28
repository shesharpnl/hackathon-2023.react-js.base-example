import React, { useState } from 'react';
import iwdPoster from "../../assets/iwdposter.jpeg";
import "./freetier.css"; // Import the CSS file
import Header from "../../components/Header";

const FreeTierIWD = () => {
  const [showPoster, setShowPoster] = useState(false);

  const handlePosterClick = () => {
    setShowPoster(!showPoster); // Toggle the state to show/hide the poster
  };

  return (
    <>
    <Header/>
    <div className="free-tier-checklist">
      <div className="left-box">
        <h2>Your Free Tier Check-list for International Women's Day</h2>
        <ul>
          <li>
            <input
              type="checkbox"
              id="poster"
              name="poster"
              checked={showPoster}
              onChange={handlePosterClick}
            />
            <label htmlFor="poster">Create a poster to share around your workplace</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="linkedin"
              name="linkedin"
            />
            <label htmlFor="linkedin">Add a LinkedIn post using one of our templates</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="events"
              name="events"
            />
            <label htmlFor="events">Check out free events in the area to bring your colleagues to</label>
          </li>
        </ul>
      </div>
      <div className="right-box">
        {showPoster && (
          <>
            <div className="poster-actions">
            </div>
            <img src={iwdPoster} alt="International Women's Day Poster" />
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default FreeTierIWD;
