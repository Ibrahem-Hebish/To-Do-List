import React from "react";
import { mainContext } from "../App/App";

export default function Data() {
  return (
    <div className="bg-secondary-subtle d-flex flex-column p-3">
      <DisplayData />
    </div>
  );
}
function ChoosedData() {
  const { selectedTasks, allTasks, deletedTasks, confirmedTasks } =
    React.useContext(mainContext);
  switch (selectedTasks) {
    case "all":
      return allTasks;
    case "deleted":
      return deletedTasks;
    case "confirmed":
      return confirmedTasks;
    default:
      return allTasks;
  }
}
function DisplayData() {
  const {
    selectedTasks,
    allTasks,
    deletedTasks,
    confirmedTasks,
    setAllTasks,
    setDeletedTasks,
    setConfirmedTasks,
  } = React.useContext(mainContext);
  const chosenTasks = ChoosedData();
  function DeleteTaskHandler(task) {
    setDeletedTasks([...deletedTasks, task]);
    const operation = allTasks.filter((t) => t !== task);
    setAllTasks(operation);
    localStorage["Tasks"] = JSON.stringify(operation);
    localStorage.setItem(
      "deletedTasks",
      JSON.stringify([...deletedTasks, task])
    );
  }
  function ConfirmeTaskHandler(task) {
    setConfirmedTasks([...confirmedTasks, task]);
    const operation = allTasks.filter((t) => t !== task);
    setAllTasks(operation);
    localStorage["Tasks"] = JSON.stringify(operation);
    localStorage.setItem(
      "confirmedtasks",
      JSON.stringify([...confirmedTasks, task])
    );
  }
  function Delete(task) {
    const operation = deletedTasks.filter((t) => t !== task);
    setDeletedTasks(operation);
    localStorage.setItem("deletedTasks", JSON.stringify(operation));
  }
  return (
    <div>
      {selectedTasks === "all"
        ? chosenTasks.map((task, index) => (
            <div key={index} className="d-flex p-3 justify-content-between">
              <h2>{task}</h2>
              <div className="d-flex gap-3">
                <button
                  className="btn btn-success"
                  onClick={() => ConfirmeTaskHandler(task)}
                >
                  Confirm
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => DeleteTaskHandler(task)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        : selectedTasks === "deleted"
        ? chosenTasks.map((task, index) => (
            <div key={index} className="d-flex p-3 justify-content-between">
              <h2>{task}</h2>
              <button className="btn btn-danger" onClick={() => Delete(task)}>
                Delete
              </button>
            </div>
          ))
        : chosenTasks.map((task, index) => (
            <div key={index} className="d-flex p-3 justify-content-between">
              <h2>{task}</h2>
            </div>
          ))}
    </div>
  );
}
