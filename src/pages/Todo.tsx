import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, task]);
    setTask("");
  };
  const removeTask = (index) => {
    let updatedList = taskList.filter((item, ind) => {
      return ind !== index;
    });
    console.log(updatedList);

    setTaskList(updatedList);
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center gap-2 border">
        <input
          type="text"
          placeholder="Todo task"
          className="border pl-3 rounded-md text-black  outline-none h-8"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button className="bg-slate-500 rounded-md p-2" onClick={addTask}>
          Add Task
        </button>
      </div>

      <div className="">
        <ol className="flex flex-col gap-8">
          {taskList.map((item, index) => (
            <li key={index}>
              {item}
              <button
                className="bg-slate-500 rounded-md p-2 ml-4 "
                onClick={() => {
                  removeTask(index);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>{" "}
      </div>
    </div>
  );
};

export default Todo;
