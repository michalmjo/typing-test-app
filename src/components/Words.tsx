import React, { useState, useRef, useEffect } from "react";
// import Word from "./Word";
import MemoizedValue from "./Word";

interface wordsChangeStatus {
  changeCounting: (dispatch: boolean) => void;
}

const getWords = () =>
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum aspernatur ducimus voluptatum pariatur qui minus magnam deleniti eaque assumenda ab vitae, obcaecati quod nemo fuga dolore itaque temporibus ullam perspiciatis!`.split(
    " "
  );
// .sort(() => (Math.random() > 0.5 ? 1 : -1));
const Words = ({ changeCounting }: wordsChangeStatus) => {
  const [typingTextInput, setTypingTextInput] = useState("");
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState<any>([]);

  const words = useRef(getWords());

  const testMemo = useRef(0);

  useEffect(() => {
    testMemo.current += 1;
  });

  const processInput = (value: string) => {
    changeCounting(true);
    // console.log(changeCounting + "to jest to");
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
            <MemoizedValue
              key={index}
              text={word}
              activeText={index === activeTextIndex}
              correct={correctWords[index]}
              memo={testMemo}
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
