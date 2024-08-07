import "./styles.css";
import { useState, useRef } from "react";

export default function App() {
  const [timerCount, setTimerCount] = useState(0);
  const intervalRef = useRef(0);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimerCount((timer) => timer + 1);
      console.log(timerCount);
    }, 1000);

    console.log(intervalRef.current);
  };
  const stop = () => {
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTimerCount(0);
  };

  return (
    <div className="App">
      <h1>Hello timeer</h1>
      <p>{timerCount}</p>
      <button
        onClick={() => {
          startTimer();
        }}
      >
        {" "}
        start{" "}
      </button>
      <button
        onClick={() => {
          stop();
        }}
      >
        {" "}
        stop{" "}
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        {" "}
        reset{" "}
      </button>
    </div>
  );
}

export const MaxElementInString = (str) => {
  let charMap = {};
  let maxchar = "";
  let maxCount = 0;

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;

    if (charMap[char] > maxCount) {
      maxchar = char;
      maxCount = charMap[char];
    }
  }
  return maxchar;
};
console.log(MaxElementInString("javascript"));
