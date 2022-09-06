import React from "react";
import "../style/Word.scss";

interface textArea {
  text: string;
  activeText: boolean | number;
  correct: boolean;
  memo: any;
}

const Word = (props: textArea) => {
  console.log("Word Przerenderowany");

  const { text, activeText, correct } = props;

  if (correct === true)
    return (
      <span className="correct">
        {text} ({props.memo.current})
      </span>
    );
  if (correct === false)
    return (
      <span className="incorrect">
        {text} ({props.memo.current})
      </span>
    );
  if (activeText)
    return (
      <span className="active">
        {text} ({props.memo.current}){" "}
      </span>
    );

  return (
    <span style={{ fontWeight: activeText ? "bold" : "normal" }}>{text} </span>
  );
};

const MemoizedValue = React.memo(Word);

export default MemoizedValue;
