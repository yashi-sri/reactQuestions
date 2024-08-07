import React, { useState } from "react";

const PopUp = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="border border-slate-500 px-8 py-2 rounded-md hover:bg-slate-500 duration-300"
      >
        open Modal
      </button>
      {open && (
        <>
          <Modal closeModel={() => setOpen(false)} />
        </>
      )}
    </div>
  );
};

const Modal = ({ closeModel }) => {
  return (
    <div
      className="h-screen w-screen backdrop-blur-md fixed top-0 left-0 z-10 flex justify-center items-center border "
      onClick={closeModel}
    >
      <div className=" border border-slate-500 p-5 flex flex-center rounded-lg bg-slate-300 text-slate-800 h-2/5 w-2/5">
        <div className="flex justify-between  w-screen">
          {" "}
          <h6 className=" ">Modal</h6>
          <button
            onClick={closeModel}
            className=" text-center bg-red-200 h-6 px-8 "
          >
            X{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
