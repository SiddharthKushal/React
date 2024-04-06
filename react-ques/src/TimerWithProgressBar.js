import React, { useState, useEffect } from "react";

const TimerWithProgressBar = ({ initialSeconds = 100 }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start the timer only if secondsLeft > 0
    if (secondsLeft > 0) {
      const intervalId = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);

      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [secondsLeft]);

  useEffect(() => {
    // Update progress as the timer decreases
    setProgress(((initialSeconds - secondsLeft) / initialSeconds) * 100);
  }, [secondsLeft, initialSeconds]);

  return (
    <div>
      <h2>Timer: {secondsLeft} seconds</h2>
      <div style={{ width: "100%", height: "20px", backgroundColor: "#ddd" }}>
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "green",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TimerWithProgressBar;
