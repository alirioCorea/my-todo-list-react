import React from 'react'
import './TodoForm.css';
import {TodoContext } from '../../TodoContext';

export default function TodoForm() {

  const [todoValue, setTodoValue] = React.useState('');
  const [error, setError]=React.useState(false);

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onClickButton=()=>{
    setOpenModal(false);
  }

  const onChange=(event)=>{
    setTodoValue(event.target.value);
  }


  const onSubmit=(event)=>{
    event.preventDefault();
    const tem=todoValue.trim();
    if(tem.length>5){
      addTodo(tem);
      setOpenModal(false);
    }
    else{
      setError(true);
    }
  }


  return (
    <form onSubmit={onSubmit} className='form'>
        <label className='form-label'>Escribe tu nuevo TODO</label>
        <textarea
          className='form-text'
          value={todoValue}
          onChange={onChange}
          placeholder="Aprender a programar"
        />
        {error && <p className='form-error'>* Dato no valido</p>}
        <div>
          <button onClick={onClickButton} type='button'>Cancelar</button>
          <button  type='submit'>Añadir</button>
        </div>
    </form>
  )
}
