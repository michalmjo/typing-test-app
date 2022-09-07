import React, { useState } from "react";
import "../style/App.scss";
import Words from "./Words";
import Timer from "./Timer";

const App = () => {
  const [startCounting, setStartCounting] = useState<boolean>(false);

  return (
    <div className="wrapper">
      <h1>Typing test</h1>
      <Words changeCounting={setStartCounting} />
      <Timer startCounting={startCounting} />
    </div>
  );
};

export default App;
