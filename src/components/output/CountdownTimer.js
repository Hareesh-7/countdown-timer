import React from "react";
import "./CountdownTimer.css";

const CountdownTimer = ({ countdownData, errorMessage }) => {
  return (
    <>
      {!(countdownData.message.length > 0) && !errorMessage ? (
        <div>
          <div className="countdown-wrapper">
            <div className="countdown-box">
              {countdownData.days}
              <span className="legend">Days</span>
            </div>
            <div className="countdown-box">
              {countdownData.hours}
              <span className="legend">Hours</span>
            </div>
            <div className="countdown-box">
              {countdownData.minutes}
              <span className="legend">Minutes</span>
            </div>
            <div className="countdown-box">
              {countdownData.seconds}
              <span className="legend">Seconds</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="highlight">
          {countdownData ? countdownData.message : errorMessage}
        </div>
      )}
    </>
  );
};

export default CountdownTimer;
