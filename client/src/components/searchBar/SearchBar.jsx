import React from 'react'

const SearchBar = ({handleSubmit, handleChange, SearchString}) => {
  return (
    <div>
      <input type="search" placeholder="Buscar Pokémon"  onChange={handleChange} value={SearchString}/>
      <button type='submit'  onClick={handleSubmit}>Buscar</button>
    </div>
  )
}

export default SearchBar