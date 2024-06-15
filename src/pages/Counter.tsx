import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" flex flex-col gap-4">
        <div className=" flex gap-10  justify-center items-center">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="border border-slate-500 px-8 py-2 rounded-md hover:bg-slate-500 duration-300"
          >
            +
          </button>

          {count}

          <button
            onClick={() => {
              setCount(count - 1);
            }}
            className="border border-slate-500 px-8 py-2 rounded-md hover:bg-slate-500 duration-300"
          >
            -
          </button>
        </div>

        <div className="flex justify-center ">
          <button
            onClick={() => {
              setCount(0);
            }}
            className=" w-full py-2 rounded-md bg-gray-500 "
          >
            Restart
          </button>
        </div>
      </div>
    </>
  );
};
export default Counter;
