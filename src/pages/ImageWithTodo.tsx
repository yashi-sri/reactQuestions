// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";

// const TodoApp = () => {
//   const [textValue, setTextValue] = useState("");
//   const [editTask, setEditTask] = useState(null);
//   const [data, setData] = useState([]);

//   const handleSubmit = () => {
//     const newdata = {
//       id: Date.now(),
//       task: textValue,
//     };
//     if (!editTask) {
//       setData([...data, newdata]);
//       setTextValue("");
//     } else {
//       setData(
//         data.map((item) =>
//           item.id === editTask?.id ? { ...item, task: textValue.trim() } : item
//         )
//       );

//       setEditTask("");
//       setTextValue("");
//     }
//   };
//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };
//   useEffect(() => {
//     console.log(data);
//   }, [data]);
//   return (
//     <>
//       <div className="flex flex-col justify-center gap-2 items-center border border-white w-[50%]">
//         <h1>Todo List</h1>
//         <input
//           type="text"
//           value={textValue}
//           placeholder="add your task"
//           className=" rounded p-2  border-gray-100 text-black "
//           onChange={(e) => {
//             setTextValue(e.target.value);
//           }}
//         />
//         <button onClick={handleSubmit}>{editTask ? "update" : "add"} </button>

//         <div className="w-full">
//           <ul className="bg-black text-sky-500 flex flex-col items-center justify-center items-center">
//             {data?.map((item) => (
//               <li key={item?.id} className="flex  justify-between w-full">
//                 {item?.task}

//                 <div className="m-2 flex justify-between border w-1/5 sm :w-1/8">
//                   <button
//                     className="p-2 px-6 border rounded-md "
//                     onClick={() => {
//                       setEditTask(item);
//                       setTextValue(item?.task);
//                     }}
//                   >
//                     edit
//                   </button>
//                   <button
//                     className="p-2 border rounded-md "
//                     onClick={() => {
//                       handleDelete(item?.id);
//                     }}
//                   >
//                     delete
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TodoApp;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  updateTask,
  deleteTask,
  setEditTask,
  clearEditTask,
} from "../context/slices/todoSlices";

const TodoApp = () => {
  const [textValue, setTextValue] = useState("");
  const dispatch = useDispatch();
  const { tasks, editTask } = useSelector((state) => state.todos);

  const handleSubmit = () => {
    if (!editTask) {
      dispatch(addTask(textValue));
      setTextValue("");
    } else {
      dispatch(updateTask({ id: editTask.id, task: textValue.trim() }));
      dispatch(clearEditTask());
      setTextValue("");
    }
  };

  const handleEdit = (task) => {
    dispatch(setEditTask(task));
    setTextValue(task.task);
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <div className="flex flex-col justify-center gap-2 items-center border border-white w-[50%]  p-2">
        <h1>Todo List/Redux </h1>
        <div className=" flex justify-between gap-2">
          <input
            type="text"
            value={textValue}
            placeholder="add your task"
            className=" rounded p-2  border-gray-100 text-black "
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
          />
          <button
            onClick={handleSubmit}
            className="  rounded-md bg-gray-500 pl-3 pr-3 "
          >
            {editTask ? "update" : "add"}{" "}
          </button>
        </div>
        <div className="w-full">
          <ul className=" text-white flex flex-col justify-between gap-2 items-center ">
            {tasks.map((item) => (
              <li
                key={item?.id}
                className="flex justify-between w-full bg-black rounded-lg"
              >
                <p className="px-4 py-3 "> {item?.task}</p>
                <div className="m-2 flex  justify-between gap-2 ">
                  <button
                    className="  rounded-md bg-gray-500 pl-3 pr-3 "
                    onClick={() => handleEdit(item)}
                  >
                    edit
                  </button>
                  <button
                    className="p-2 border rounded-md  bg-gray-500"
                    onClick={() => handleDelete(item?.id)}
                  >
                    delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
