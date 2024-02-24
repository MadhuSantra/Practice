import React, { useEffect, useState } from "react";
import Timer from "./Timer";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [stopWatchStarted, setStopwatchStarted] = useState(false);

  useEffect(() => {
    let timerId;
    if (stopWatchStarted) {
      timerId = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [stopWatchStarted, time]);

  const handleResetStopwatch = () => {
    setTime(0);
    setStopwatchStarted(false);
  };

  return (
    <>
      <Timer
        {...{
          time,
          handleResetStopwatch,
          stopWatchStarted,
        }}
        // time={time}
      />
    </>
  );
}

export default Stopwatch;
