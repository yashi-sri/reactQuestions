import React, { useState } from "react";
import AccordianCard from "../component/accordian";

const Accordian = () => {
  const [open, setOpen] = useState(null);
  const [list] = useState([
    { heading: "jfng", info: "fghd" },
    { heading: "jfng", info: "fghd" },
    { heading: "jfng", info: "fghd" },
    { heading: "jfng", info: "fghd" },
  ]);
  const handleClose = (ind: number) => {
    setOpen((prev) => (ind != prev ? ind : null));
  };

  return (
    <div>
      {list?.map((item, ind) => (
        <AccordianCard
          key={ind}
          listValue={item}
          value={open}
          handleClose={() => {
            handleClose(ind);
          }}
          index={ind}
        />
      ))}
    </div>
  );
};

export default Accordian;
