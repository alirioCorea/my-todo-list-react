import React from 'react';
import TodoTitle from '../components/TodoTitle';
import TodoSeccion from '../components/TodoSeccion';
import TodoCounter from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import CreateTodoButton from '../components/CreateTodoButton';
import {TodoContext } from '../TodoContext';
import Modal from '../Modal';
import TodoForm from '../components/TodoForm';
import TodoLoading from "../components/TodoLoading";

export default function AppUI() {
    const {
            error,
            loading,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoTitle />
            <TodoSeccion>
                <TodoCounter />
                <TodoSearch/>
                <TodoList>
                    {error && <p className='todo-list--parrafo'>Actualmente estamos teniendo problemas...</p>}
                    {loading && <TodoLoading />}
                    {(!loading && !searchedTodos.length) && <p className='todo-list--parrafo'>Crea tu primera tarea</p>}
                    {searchedTodos.map((todo) => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>
                {
                    !!openModal&&(
                        <Modal>
                            <TodoForm />
                        </Modal>
                    )
                }
                <CreateTodoButton 
                    setOpenModal={setOpenModal}
                />
            </TodoSeccion>
        </React.Fragment>
    );
}
