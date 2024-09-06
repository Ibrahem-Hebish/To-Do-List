import React, {useState,useEffect } from "react";
import AddTasks from "../AddTask/NewTask";
import Data from "../Data/Data";
import Buttons from "../Buttons/Buttons";
import "./App.module.css";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [confirmedTasks, setConfirmedTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState("all");
  useEffect(() => {
    if(localStorage.getItem("Tasks")){
      setAllTasks(JSON.parse(localStorage.getItem("Tasks")));
    }
    if(localStorage.getItem("deletedTasks")){
      setDeletedTasks(JSON.parse(localStorage.getItem("deletedTasks")));
    }
    if(localStorage.getItem("confirmedtasks")){
      setConfirmedTasks(JSON.parse(localStorage.getItem("confirmedtasks")));
    }
    if(localStorage.getItem("state")){
      setSelectedTasks(localStorage.getItem("state"));
    }
  },[])
  return (
    <div className="d-flex justify-content-center gap-3 m-5">
      <div className="w-50">
        <AddTasks allTasks={allTasks} setAllTasks={setAllTasks} setSelectedTasks = {setSelectedTasks} />
        <Data
          Tasks={selectedTasks}
          allTasks={allTasks}
          deletedTasks={deletedTasks}
          confirmedTasks={confirmedTasks}
          setDeletedTasks={setDeletedTasks}
          setConfirmedTasks={setConfirmedTasks}
          setAllTasks={setAllTasks}
        />
      </div>
      <div className="w-25 p-3 d-flex align-items-center flex-column border bg-secondary-subtle">
        <Buttons setSelectedTasks={setSelectedTasks} />
      </div>
    </div>
  );
}

export default App;
