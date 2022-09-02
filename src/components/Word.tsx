import React from "react";
import "../style/Word.scss";

interface textArea {
  text: string;
  activeText: boolean | number;
  correct: boolean;
}

const Word = (props: textArea) => {
  // console.log(props.text.split("").join(" "));
  //   const newText = props.text.split("").join(" ");

  const { text, activeText, correct } = props;

  if (correct === true) return <span className="correct">{text} </span>;
  if (correct === false) return <span className="incorrect">{text} </span>;
  if (activeText) return <span className="active">{text} </span>;

  return (
    <span style={{ fontWeight: activeText ? "bold" : "normal" }}>{text} </span>
  );
};

export default Word;
