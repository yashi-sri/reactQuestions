import React, { useState, useEffect } from "react";
import axios from "axios";

const UItodo = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState();

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=10`
      );
      setData(response?.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = () => {
    const newData = {
      id: Date.now(),
      title: inputValue,
      completed: false,
    };
    console.log(inputValue);
    setData([newData, ...data]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    const updatedArr = data.filter((item) => item.id != id);
    setData(updatedArr);
  };
  const handleComplete = (id) => {
    // let oldData = JSON.parse(JSON.stringify(data));

    // oldData = oldData.map((item) =>
    //   item.id === id ? { ...item, completed: !item.completed } : item
    // );

    // setData(oldData);

    setData((data) =>
      data.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1 className="bold  "> Todos</h1>

      <div className="flex justify-between my-5">
        <input
          style={{ color: "black" }}
          type="text "
          placeholder="add details"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Submit </button>
      </div>

      {data.map((item) => (
        <ol className="flex justify-between " key={item.id}>
          <li>
            {" "}
            <p
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {" "}
              {item?.title}{" "}
            </p>{" "}
          </li>

          <div className="flex gap-2">
            <button> edit</button>
            <button
              onClick={() => {
                handleComplete(item.id);
              }}
            >
              {" "}
              complete
            </button>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              {" "}
              delete
            </button>{" "}
          </div>
        </ol>
      ))}
    </div>
  );
};

export default UItodo;
