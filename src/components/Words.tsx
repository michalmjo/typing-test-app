import React, { useState, useRef, useEffect } from "react";

import MemoizedValue from "./Word";

interface wordsChangeStatus {
  changeCounting: (dispatch: boolean) => void;
  counting: boolean;
  getCorrectWords: any;
}

const getWords = () =>
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum aspernatur ducimus voluptatum pariatur qui minus magnam deleniti eaque assumenda ab vitae, obcaecati quod nemo fuga dolore itaque temporibus ullam perspiciatis!`.split(
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
        setTypingTextInput("You're Done !");
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
    <div>
      <p>
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
      </p>
      <input
        type="text"
        value={typingTextInput}
        onChange={(e) => processInput(e.target.value)}
      />
    </div>
  );
};

export default Words;
