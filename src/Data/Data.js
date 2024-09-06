import React from "react";

export default function Data({
  Tasks,
  allTasks,
  deletedTasks,
  confirmedTasks,
  setDeletedTasks,
  setConfirmedTasks,
  setAllTasks
}) {
  return (
    <div className="bg-secondary-subtle d-flex flex-column p-3">
      <DisplayData
        Tasks={Tasks}
        allTasks={allTasks}
        deletedTasks={deletedTasks}
        confirmedTasks={confirmedTasks}
        setDeletedTasks={setDeletedTasks}
        setConfirmedTasks = {setConfirmedTasks}
        setAllTasks = {setAllTasks}
      />
    </div>
  );
}
function ChoosedData(Tasks, allTasks, deletedTasks, confirmedTasks) {
  switch (Tasks) {
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
function DisplayData({
  Tasks,
  allTasks,
  deletedTasks,
  confirmedTasks,
  setDeletedTasks,
  setConfirmedTasks,
  setAllTasks
}) {
  const chosenTasks = ChoosedData(
    Tasks,
    allTasks,
    deletedTasks,
    confirmedTasks
  );
  function DeleteTaskHandler(task) {
    setDeletedTasks([...deletedTasks, task]);
    allTasks = allTasks.filter((t) => t !== task);
    setAllTasks(allTasks)
    localStorage["Tasks"] = JSON.stringify(allTasks)
    localStorage.setItem("deletedTasks",JSON.stringify([...deletedTasks, task]))
  }
  function ConfirmeTaskHandler(task) {
    setConfirmedTasks([...confirmedTasks, task]);
    allTasks = allTasks.filter((t) => t !== task);
    setAllTasks(allTasks)
    localStorage["Tasks"] = JSON.stringify(allTasks)
    localStorage.setItem("confirmedtasks",JSON.stringify([...confirmedTasks, task]))
  }
  function Delete(task) {
    deletedTasks = (deletedTasks.filter((t) => t !== task));
    setDeletedTasks(deletedTasks)
    localStorage.setItem("deletedTasks",JSON.stringify(deletedTasks))
  }
  return (
    <div>
        { Tasks === "all" ? chosenTasks.map((task, index) => (
        <div key={index} className="d-flex p-3 justify-content-between">
          <h2>{task}</h2>
          <div className="d-flex gap-3">
          <button
            className="btn btn-success"
            onClick={() =>
              ConfirmeTaskHandler(task)
            }
          >
            Confirm
          </button>
          <button
            className="btn btn-danger"
            onClick={() =>
              DeleteTaskHandler(task)
            }
          >
            Delete
          </button>
          </div>
        </div>
      )) : Tasks === "deleted" ? chosenTasks.map((task, index) => (
        <div key={index} className="d-flex p-3 justify-content-between">
          <h2>{task}</h2>
          <button className="btn btn-danger" onClick={() => Delete(task)}>Delete</button> 
          </div>
      )):chosenTasks.map((task, index) => (
        <div key={index} className="d-flex p-3 justify-content-between">
          <h2>{task}</h2> 
          </div>))}
    </div>
  );
}
