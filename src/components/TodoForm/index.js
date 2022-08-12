import React from 'react'
import './TodoForm.css';

export default function index() {
  return (
    <form>
        <label></label>
        <textarea
            placeholder="Aprender a programar"
        />
        <div>
        <button>Cancelar</button>
        <button>Añadir</button>
        </div>
    </form>
  )
}
