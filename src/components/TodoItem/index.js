import React from 'react'
import trash from '../../img/trash.png';
import check from '../../img/check.png';
import './TodoItem.css';

export default function TodoItem(props) {
  
  return (
    <li className='todo-item'>
        <span>
            <img src={check} alt="logo-item" className='logo-item' onClick={props.onComplete}></img>
        </span>
        <p className={`${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
        <span>
            <img src={trash} alt="logo-item" className='logo-item' onClick={props.onDelete}></img>
        </span>
    </li>
  )
}
