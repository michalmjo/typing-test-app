import React, { useEffect, useState } from "react";

interface typingTimer {
  startCounting: boolean;
}
const Timer = ({ startCounting }: typingTimer) => {
  console.log(startCounting);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    let indexInterval = 0;
    if (startCounting) {
      setInterval(() => {
        setSpeed((prev) => prev + 1);
      }, 1000);
    }
    return clearInterval(indexInterval);
  }, [startCounting]);

  return (
    <div className="speedContainer">
      <p>Speed {speed}</p>
      <button>Start</button>
    </div>
  );
};

export default Timer;
