import { useState, useEffect } from "react";

const NewTodo = () => {
  const [edited, setEdited] = useState(null);
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    //  inputText.trim("")
    if (edited) {
      let oldList = list;
      for (let item of oldList) {
        if (item?.id === edited) {
          item.text = inputText;
          break;
        }
      }
      setList(oldList);
      setInputText("");
      setEdited(null);
    } else {
      const newData = {
        id: Date.now(),
        text: inputText.trim(),
      };
      setList([...list, newData]);
      setInputText("");
    }
  };

  const handleDelete = (id) => {
    let updatedData = list.filter((item) => item.id != id);
    setList(updatedData);
  };
  const handleEdit = (item) => {
    setEdited(item.id);
    setInputText(item.text);
    console.log("edited", item);
  };
  return (
    <>
      <div>newTodo</div>
      <div>
        <input
          type="text"
          style={{ color: "black" }}
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button onClick={handleSubmit}> Submit</button>
      </div>

      <div className=" flex flex-col justify-between items-center ">
        {list?.map((item) => (
          <li key={item?.id}>
            <span className="">{item?.text}</span>
            <button onClick={() => handleEdit(item)}>Edit</button>

            <button onClick={() => handleDelete(item?.id)}>Delete</button>
          </li>
        ))}
      </div>
    </>
  );
};

export default NewTodo;
