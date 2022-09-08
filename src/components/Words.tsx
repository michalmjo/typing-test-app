import React, { useState, useRef } from "react";

import MemoizedValue from "./Word";

interface wordsChangeStatus {
  changeCounting: (dispatch: boolean) => void;
  counting: boolean;
  getCorrectWords: any;
}

const getWords = () =>
  `Chapter too parties its letters nor. Cheerful but whatever ladyship disposed yet judgment. Lasted answer oppose to ye months no esteem. Branched is on an ecstatic directly it. Put off continue you denoting returned juvenile. Looked person sister result mr to. Replied demands charmed do viewing ye colonel to so. Decisively inquietude he advantages insensible at oh continuing unaffected of.`.split(
    " "
  );
// .sort(() => (Math.random() > 0.5 ? 1 : -1));
const Words = ({
  changeCounting,
  counting,
  getCorrectWords,
}: wordsChangeStatus) => {
  const [typingTextInput, setTypingTextInput] = useState("");
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState<any>([]);

  const words = useRef(getWords());

  const processInput = (value: string) => {
    if (activeTextIndex === words.current.length) return;
    if (!counting) {
      changeCounting(true);
    }

    console.log(`${activeTextIndex} ${words.current.length} `);
    getCorrectWords(correctWords);

    if (value.endsWith(" ")) {
      if (activeTextIndex === words.current.length - 1) {
        changeCounting(false);
        setTypingTextInput("You are done !");
      } else {
        setTypingTextInput("");
      }
      setActiveTextIndex((index) => index + 1);

      setCorrectWords((data: {}[]) => {
        const word = value.trim();
        const newResult = [...data];
        newResult[activeTextIndex] = word === words.current[activeTextIndex];
        return newResult;
      });
    } else {
      setTypingTextInput(value);
    }
  };

  return (
    <div className="wordsWrapper">
      <div className="wordsWrapper__text">
        {words.current.map((word, index) => {
          return (
            <MemoizedValue
              key={index}
              text={word}
              activeText={index === activeTextIndex}
              correct={correctWords[index]}
            />
          );
        })}
      </div>
      <div className="wordsWrapper__input">
        <input
          type="text"
          value={typingTextInput}
          onChange={(e) => processInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Words;
