import React, { useState, useRef } from "react";
import Word from "./Word";

const getWords = () =>
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum aspernatur ducimus voluptatum pariatur qui minus magnam deleniti eaque assumenda ab vitae, obcaecati quod nemo fuga dolore itaque temporibus ullam perspiciatis!`.split(
    " "
  );
// .sort(() => (Math.random() > 0.5 ? 1 : -1));

const Words = () => {
  const [typingTextInput, setTypingTextInput] = useState("");
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState<any>([]);
  const words = useRef(getWords());

  const processInput = (value: string) => {
    if (value.endsWith(" ")) {
      setActiveTextIndex((index) => index + 1);
      setTypingTextInput("");

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

  console.log(words.current);

  return (
    <div>
      <p>
        {words.current.map((word, index) => {
          return (
            <Word
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
