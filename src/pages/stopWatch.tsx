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
        <h5 className="mt-10">stop watch </h5>

        <p>Time: {timeCount}</p>
        <div className="flex justify-center gap-16 mt-5 ">
          <button
            onClick={() => {
              startFunction();
            }}
            className=" w-full py-2 rounded-md bg-gray-500 pl-3 pr-3 "
          >
            start{" "}
          </button>
          <button
            onClick={stopFunction}
            className=" w-full py-2 rounded-md bg-gray-500  pl-3 pr-3"
          >
            stop{" "}
          </button>
        </div>
      </div>
    </>
  );
};
export default StopWatch;
