import React from 'react'
import './TodoSearch.css';

export default function TodoSearch({searchValue, setSearchValue}) {

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
