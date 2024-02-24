import React from "react";

function Timer({
  time,
  handleResetStopwatch,
  stopWatchStarted,
  setStopwatchStarted,
}) {
  return (
    <>
      {time}
      <button
        type="button"
        onClick={() => setStopwatchStarted(!stopWatchStarted)}
      >
        {stopWatchStarted ? <>Pause</> : <>Start</>}
      </button>
      <button type="button" onClick={() => handleResetStopwatch()}>
        Reset
      </button>
    </>
  );
}

export default Timer;
