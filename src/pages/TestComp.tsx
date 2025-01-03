import { useState } from "react";

const TestComp = () => {
  //   const myInput = useRef<HTMLInputElement | null>(null);
  const [myValue, setValue] = useState<string>("yashi");
  return (
    <div>
      <input
        type="text"
        value={myValue}
        style={{ color: "black" }}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={() => {
          console.log(myValue);
        }}
      >
        Click
      </button>
    </div>
  );
  //   const myInput = useRef<HTMLInputElement | null>(null);
  //   return (
  //     <div>
  //       <input type="text" style={{ color: "black" }} ref={myInput} />
  //       <input type="checkbox" style={{ color: "black" }} />
  //       <button
  //         onClick={() => {
  //           if (myInput.current) console.log(myInput.current.value);
  //         }}
  //       >
  //         Click
  //       </button>
  //     </div>
  //   );
};

export default TestComp;
