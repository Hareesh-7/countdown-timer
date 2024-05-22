import React, { useState, useEffect } from "react";
import DateInputForm from "../input/DateInputForm";
import CountdownTimer from "../output/CountdownTimer";
import "./HomePage.css";

const HomePage = () => {
  const [isCountDownActive, setIsCountDownActive] = useState(false);
  const [countdownData, setCountdownData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    message: "",
  });
  const [intervalId, setIntervalId] = useState(null);

  const startCountdown = (targetDateTime) => {
    clearInterval(intervalId);
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDateTime);

      if (target > now) {
        const distance = target - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days <= 99 && hours <= 23 && minutes <= 59 && seconds <= 59) {
          setIsCountDownActive(true);
          setCountdownData({ days, hours, minutes, seconds, message: "" });
        } else {
          setCountdownData({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            message: "Selected time is more than 100 days",
          });
        }
      } else {
        setIsCountDownActive(false);
        setCountdownData({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          message: "🎉 The countdown is over! What's next on your adventure? 🎉",
        });
        clearInterval(interval);
      }
    }, 1000);
    setIntervalId(interval);
  };

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  const handleDateSelect = (date) => {
    startCountdown(date);
  };

  const cancelTimer = () => {
    clearInterval(intervalId);
    setIsCountDownActive(false);
    setCountdownData({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      message: "",
    });
  };

  return (
    <div className="home-container">
      <h1 className="heading">
        Countdown <span className="highlight">Timer</span>
      </h1>
      <DateInputForm
        isCountDownActive={isCountDownActive}
        onDateSelect={handleDateSelect}
        onCancel={cancelTimer}
      />
      <CountdownTimer countdownData={countdownData} />
    </div>
  );
};

export default HomePage;
