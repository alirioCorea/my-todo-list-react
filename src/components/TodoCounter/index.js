import React from 'react'
import logo from '../../img/counter.svg';
export default function TodoCounter({total,completed}) {
  return (
    <div className='counter'>
        <img src={logo} alt="logo" className='counter-logo'></img>
        <h2 className='counter-titulo'>Has complentado {completed} de {total} ToDos</h2>
    </div>
  )
}
