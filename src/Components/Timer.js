import react, { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(setCount(count + 1), 1000);
  });
  return (
    <>
      <h1>Timer</h1>
      <h2>{count}</h2>
    </>
  );
}

export default Timer;
