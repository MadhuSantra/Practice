import React from "react";

function Timer(props) {
  console.log(props);
  return (
    <>
      {props.time}
      <button
        type="button"
        onClick={() => props.setStopwatchStarted(!props.stopWatchStarted)}
      >
        {props.stopWatchStarted ? <>Pause</> : <>Start</>}
      </button>
      <button type="button" onClick={() => props.handleResetStopwatch()}>
        Reset
      </button>
    </>
  );
}

export default Timer;
