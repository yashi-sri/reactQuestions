import React, { useState } from "react";

const BgChange = () => {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const handlebgcolor = () => {
    setBackgroundColor(backgroundColor === "red" ? "blue" : "red");
  };
  return (
    <div>
      <div
        style={{ backgroundColor }}
        className="cursor-pointer"
        onClick={handlebgcolor}
      >
        change Background Color
      </div>
    </div>
  );
};

export default BgChange;
