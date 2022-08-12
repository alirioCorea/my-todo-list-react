import React from 'react'

export default function TodoList(props) {
  return (
    <section className='container-todo'>
        <ul className='todo-list'>
            {props.children}
        </ul>
    </section>
  )
}
