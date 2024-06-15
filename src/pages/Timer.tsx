import React, { useState, useEffect } from "react";
const MAX_TIME = 59;

const Timer = () => {
  const [timer, setTimer] = useState(MAX_TIME);
  const [isStop, setIsStop] = useState(true);

  useEffect(() => {
    if (timer > 0 && !isStop) {
      let refTimer = setTimeout(() => {
        setTimer((time) => time - 1);
      }, 1000);
      return () => clearTimeout(refTimer);
    }
    if (timer === 0) {
      setIsStop(true);
      setTimer(MAX_TIME);
    }
  }, [timer, isStop]);

  const stopTimer = () => {
    setIsStop(!isStop);
  };
  const restTimer = () => {
    setIsStop(!isStop);
    setTimer(59);
  };

  return (
    <div>
      <p className="text-white"> {timer}</p>
      <div className="flex gap-2">
        {" "}
        <button onClick={stopTimer} className="bg-slate-500 rounded-md p-2">
          {isStop ? "start" : "stop"}
        </button>
        <button onClick={restTimer} className="bg-slate-500 rounded-md p-2">
          Restart{" "}
        </button>
      </div>
    </div>
  );
};

export default Timer;
