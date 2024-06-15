import React, { useState } from "react";

const List = () => {
  const [list, setList] = useState([
    "apple",
    "mango",
    "strawberry",
    "promegrante",
  ]);
  return (
    <div>
      <ul>
        {list?.map((item, index) => (
          <li key={index}>lits Item : {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
