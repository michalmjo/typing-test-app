import React, { useEffect, useState } from "react";
import "../style/Timer.scss";

interface typingTimer {
  startCounting: boolean;
  correctWords: any;
}
const Timer = ({ startCounting, correctWords }: typingTimer) => {
  console.log(startCounting);
  const [timeElepsed, setTimeElapsed] = useState(0);
  const boolenCorrectWords = correctWords.filter(Boolean).length;

  const allMistakes = correctWords.filter((item: boolean) => !item);

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
      <p>Time: {timeElepsed} sec</p>
      <p>Speed: {`${(boolenCorrectWords / minutes || 0).toFixed(0)} WPM`}</p>
      <p>Mistakes: {`${allMistakes.length}`}</p>
      <p>Correct: {boolenCorrectWords}</p>
    </div>
  );
};

export default Timer;
