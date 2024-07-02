import React, { useState } from "react";

const DarkTheme = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          type="checkbox"
          value={isDark}
          onChange={() => {
            setIsDark(!isDark);
          }}
        />{" "}
        <p> {isDark ? "light" : "dark"}</p>
      </div>
      <div
        className={
          isDark ? "bg-slate-700  h-50 w-80 " : "bg-white h-screen w-screen"
        }
      >
        <p className={isDark ? "text-white" : "text-black"}>
          {" "}
          this is dark and light theme
        </p>
      </div>
    </div>
  );
};

export default DarkTheme;
