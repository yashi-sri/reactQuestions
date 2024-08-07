import { useState, useEffect } from "react";

const StopWatch = () => {
  const [timeCount, setTimeCount] = useState(0);
  const [timerStatus, setTimerStatus] = useState(false);

  const startFunction = () => {
    setTimerStatus(!timerStatus);
  };
  const stopFunction = () => {
    setTimerStatus(false);
  };

  useEffect(() => {
    const refTimer = setTimeout(() => {
      if (timerStatus) {
        setTimeCount((timeCount) => timeCount + 1);
      }

      return () => clearTimeout(refTimer);
    }, 1000);
  }),
    [timerStatus, timeCount];

  return (
    <>
      <div>
        <p>stop watch </p>

        <p>Time: {timeCount}</p>
        <div className="flex gap-5">
          <button
            onClick={() => {
              startFunction();
            }}
            className="border Border-400-white"
          >
            start{" "}
          </button>
          <button onClick={stopFunction}>stop </button>
        </div>
      </div>
    </>
  );
};
export default StopWatch;
