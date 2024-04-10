import React from 'react'

const SearchBar = ({handleChange}) => {
  return (
    <div>
      <input type="search" placeholder="Buscar Pokémon"  onChange={handleChange}/>
    </div>
  )
}

export default SearchBar