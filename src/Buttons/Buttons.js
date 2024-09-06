import React from 'react'

export default function Buttons({setSelectedTasks}) {
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
      <button className='btn btn-outline-primary mb-3 d-block' onClick={AllHandler} >All</button>
      <button className='btn btn-outline-success mb-3 d-block' onClick={ConfirmedHandler} >Confirmed</button>
      <button className='btn btn-outline-danger d-block' onClick={DeletedHandler} >Deleted</button>
    </div>
  )
}
