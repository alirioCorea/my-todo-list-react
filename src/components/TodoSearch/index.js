import React from 'react'
import './TodoSearch.css';
import {TodoContext } from '../../TodoContext';

export default function TodoSearch() {

  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);

  const onSearchValueChange=(event)=>{
    const temp=event.target.value;
    setSearchValue(temp);
  }

  return (
    <input 
      placeholder="What are you looking for?" 
      type="text" 
      className="input search" 
      required=""
      onChange={onSearchValueChange}
      value={searchValue}
    />
  )
}
