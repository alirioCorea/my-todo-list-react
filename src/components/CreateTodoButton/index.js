import React from 'react'
import './CreateTodoButton.css'

export default function CreateTodoButton(props) {

  const onClickButton=()=>{
    
  }

  return (
    <div className='seccion-boton'>
      <button className="icon-btn add-btn" onClick={onClickButton}>
        <div className="add-icon"></div>
        <div className="btn-txt">Add Task</div> 
      </button>
    </div>
  )
}
