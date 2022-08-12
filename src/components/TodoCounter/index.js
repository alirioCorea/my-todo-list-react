import React from 'react'
import logo from '../../img/counter.svg';
import {TodoContext } from '../../TodoContext';
export default function TodoCounter() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);
  return (
    <div className='counter'>
        <img src={logo} alt="logo" className='counter-logo'></img>
        <h2 className='counter-titulo'>Has complentado {completedTodos} de {totalTodos} ToDos</h2>
    </div>
  )
}
