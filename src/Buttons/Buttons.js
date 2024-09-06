import React from 'react'
import { mainContext } from "../App/App";


export default function Buttons() {
  const { setSelectedTasks } = React.useContext(mainContext)
    function AllHandler(){
        setSelectedTasks("all")
        localStorage.setItem("state","all")
    }
    function ConfirmedHandler(){
        setSelectedTasks("confirmed")
        localStorage.setItem("state","confirmed")
    }
    function DeletedHandler(){
        setSelectedTasks("deleted")
        localStorage.setItem("state","deleted")
    }
  return (
    <div>
      <button className='btn btn-outline-primary mb-3 d-block' onClick={AllHandler} >Working</button>
      <button className='btn btn-outline-success mb-3 d-block' onClick={ConfirmedHandler} >Confirmed</button>
      <button className='btn btn-outline-danger d-block' onClick={DeletedHandler} >Deleted</button>
    </div>
  )
}
