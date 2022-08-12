import React from 'react';
import TodoTitle from '../components/TodoTitle';
import TodoSeccion from '../components/TodoSeccion';
import TodoCounter from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import CreateTodoButton from '../components/CreateTodoButton';

export default function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <React.Fragment>
            <TodoTitle />
            <TodoSeccion>
                <TodoCounter 
                    completed={completedTodos} 
                    total={totalTodos} 
                />
                <TodoSearch 
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue} 
                    />
                <TodoList>
                    {error && <p>Actualmente estamos teniendo problemas...</p>}
                    {loading && <p>Estamos Cargando tus tareas, no desesperes...</p>}
                    {(!loading && !searchedTodos.length) && <p>Crea tu primera tarea</p>}
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
                <CreateTodoButton />
            </TodoSeccion>
        </React.Fragment>
    );
}
