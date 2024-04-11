import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/PokémonLogo.svg"
import styles from './navbar.module.css'
import SearchBar from '../searchBar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { getByName } from '../../redux/actions/actions'

const Navbar = () => {
  const dispatch = useDispatch()
  const [searchString, setSearchString] = useState("");

  
  function handleChange(e) {
    e.preventDefault()
    setSearchString(e.target.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getByName(searchString))
  }
  
  
  return (
    <div className={styles.navbar}>
      <form className={styles.navbar} onChange={handleChange}>
        <img src={logo} alt="" />
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} searchString= {searchString}></SearchBar>
        
        <Link to="/create">
          <button type='submit' >Crear Pokémon</button>
        </Link>

      </form>

    </div>

  )
}

export default Navbar