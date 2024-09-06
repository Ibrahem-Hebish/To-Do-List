import React, { useState } from "react";
import Styles from "./NewTask.module.css";
import { mainContext } from "../App/App";

export default function AddNewTask() {
  var {allTasks, setAllTasks,setSelectedTasks} = React.useContext(mainContext)
  const [inputValue, setInputValue] = useState("");
  function AddHandler() {
    setAllTasks([...allTasks, inputValue]);
    setSelectedTasks("all")
    localStorage.setItem("Tasks", JSON.stringify([...allTasks, inputValue]));
  }
  return (
    <div className="mb-3 bg-secondary-subtle p-3 d-flex justify-content-between align-items-center">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={Styles.inputClass}
      />
      <button className="btn btn-primary" onClick={AddHandler}>
        Add
      </button>
    </div>
  );
}
