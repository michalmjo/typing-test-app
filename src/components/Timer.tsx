import React, { useEffect, useState } from "react";

interface typingTimer {
  startCounting: boolean;
  correctWords: any;
}
const Timer = ({ startCounting, correctWords }: typingTimer) => {
  console.log(startCounting);
  const [timeElepsed, setTimeElapsed] = useState(0);
  console.log(`to jest boolien tablicy z filter ${correctWords}`);

  useEffect(() => {
    console.log(startCounting);
    let indexInterval: ReturnType<typeof setInterval>;
    if (startCounting) {
      console.log("Counting sie wywoluje");
      indexInterval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(indexInterval);
  }, [startCounting]);

  const minutes = timeElepsed / 60;

  return (
    <div className="speedContainer">
      <p>Time: {timeElepsed}</p>
      <p>Speed: {`${(correctWords / minutes || 0).toFixed(0)} WPM`}</p>
    </div>
  );
};

export default Timer;
