import { useState, useEffect } from "react";

function Trystopwatch() {
  const [timer, setTimer] = useState(0);
  const [startStop, setStartStop] = useState(false);

  const handleClick = () => {
    setStartStop(!startStop);
    console.log("callfun");
  };
  useEffect(() => {
    let reftimer = setTimeout(() => {
      if (startStop) {
        setTimer((time) => time + 1);
      } else {
        setStartStop(false);
      }
      return () => clearTimeout(reftimer);
    }, 1000);
  }, [startStop, timer]);
  return (
    <>
      <div>
        <h1>timer - {timer + " "} </h1>
        <div className=" flex ">
          {" "}
          <button onClick={handleClick}> start/stop </button>{" "}
        </div>
      </div>
    </>
  );
}

export default Trystopwatch;
