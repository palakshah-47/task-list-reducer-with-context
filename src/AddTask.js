import React, { useState, useRef } from "react";
import { useTasksContext } from "./TasksContext";
export default AddTask = () => {
  // const [text, setText] = useState("");
  const inputRef = useRef();

  const { dispatch } = useTasksContext();
  return (
    <>
      <input
        type="text"
        ref={inputRef}
        // value={inputRef.current}
        onChange={(e) => {
          inputRef.current.value = e.target.value;
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "added",
            id: nextId++,
            text: inputRef.current.value
          });
          inputRef.current.value = "";
        }}
      >
        Add
      </button>
    </>
  );
};
let nextId = 3;
