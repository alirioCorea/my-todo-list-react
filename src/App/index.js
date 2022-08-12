import React from 'react';
import './App.css';
import AppUI from './AppUI';
import { useLocalStorage } from '../hooks/useLocalStorage'; 

function App() {

  const [searchValue, setSearchValue]=React.useState('');
  const {
    item:todos,
    savedItem:setTodos,
    loading,
    error
  }=useLocalStorage('TODOS_1',[]);

  const completedTodos=todos.filter(todo=>todo.completed).length;
  const totalTodos=todos.length;

  let searchedTodos=[];

  if(!searchValue.length>=1){
    searchedTodos=todos;
  }
  else{
    searchedTodos=todos.filter(todo =>{
      const todoText=todo.text.toLocaleLowerCase();
      const searchText=searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo=(text)=>{
    const todoIndex=todos.findIndex( todo => todo.text===text);
    const newTodos=[...todos];
    newTodos[todoIndex].completed=true;
    setTodos(newTodos);
  }

  const deleteTodo=(text)=>{
    const todoIndex=todos.findIndex( todo => todo.text===text);
    const newTodos=[...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
