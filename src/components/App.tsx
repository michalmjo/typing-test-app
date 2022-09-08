import React, { useState } from "react";
import "../style/App.scss";
import Words from "./Words";
import Timer from "./Timer";

const App = () => {
  const [startCounting, setStartCounting] = useState<boolean>(false);
  const [correctWords, setCorrectWords] = useState<[]>([]);

  return (
    <div className="wrapper">
      <h1>Typing test</h1>
      <Words
        changeCounting={setStartCounting}
        counting={startCounting}
        getCorrectWords={setCorrectWords}
      />
      <Timer startCounting={startCounting} correctWords={correctWords} />
    </div>
  );
};

export default App;
