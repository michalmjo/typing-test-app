import React from "react";
import "../style/App.scss";
import Words from "./Words";

const App = () => {
  return (
    <div className="wrapper">
      <h1>Typing test</h1>
      <Words />
    </div>
  );
};

export default App;
