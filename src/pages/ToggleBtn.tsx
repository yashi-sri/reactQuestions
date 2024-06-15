import React, { useState } from "react";

const ToggleBtn = () => {
  const [isTrue, setIsTrue] = useState(true);
  const handleToggle = () => {
    setIsTrue(!isTrue);
  };
  return (
    <div className="flex gap-2">
      <input type="checkbox" onChange={handleToggle} checked={isTrue} />

      <p className="my-2"> {isTrue ? "ON" : "OFF"}</p>
    </div>
  );
};

export default ToggleBtn;
