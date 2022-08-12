import React from 'react'

export default function TodoSeccion({children}) {
  return (
    <section className='container'>
        <div className='todo-container'>
            {children}
        </div>
    </section>
  )
}
