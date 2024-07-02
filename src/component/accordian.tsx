import React, { useState } from "react";

const AccordianCard = ({ listValue, value, handleClose, index }) => {
  const handleChange = () => {
    handleClose();
  };

  return (
    <div>
      <div className=" flex justify-between bg-slate-200 px-3 text-slate-900 border-red-600  w-60 py-2">
        {listValue?.heading}
        <button
          className="bg-slate-400 text-black px-2 rounded-md"
          onClick={handleChange}
        >
          open
        </button>
      </div>
      {value == index && (
        <div className="border mb-4 bg-slate-400 px-3 text-slate-900 py-2">
          {" "}
          {listValue?.info}
        </div>
      )}
    </div>
  );
};

export default AccordianCard;
