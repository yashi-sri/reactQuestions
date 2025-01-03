import { useEffect, useState } from "react";

function Trytodo() {
  const [inputValue, setInputValue] = useState();
  const [listTodo, SetListTodo] = useState([]);
  const [edited, setEdited] = useState();

  const handleSubmit = () => {
    if (edited) {
      let oldList = listTodo;
      for (let item of oldList) {
        if (item.id === edited) {
          item.text = inputValue;
          break;
        }
      }

      SetListTodo(oldList);
      setInputValue("");
      setEdited(null);
    } else {
      const newData = {
        id: Date.now(),
        text: inputValue,
      };
      SetListTodo([...listTodo, newData]);
      setInputValue("");
    }
  };
  const handleEdit = (item) => {
    console.log("edit");
    setInputValue(item.text);
    setEdited(item.id);
  };

  useEffect(() => {
    console.log(listTodo, "listTodo");
  }, [listTodo]);
  return (
    <>
      <div>
        <input
          type="text"
          style={{ color: "black" }}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={handleSubmit}
          style={{ marginLeft: "2px", marginBottom: "15px" }}
        >
          submittttt
        </button>

        {listTodo.map((item) => (
          <div key={item.id} className="flex gap-3 justify-between">
            <p>{item.text}</p>
            <button
              type="button"
              onClick={() => {
                handleEdit(item);
              }}
            >
              Edit{" "}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Trytodo;
