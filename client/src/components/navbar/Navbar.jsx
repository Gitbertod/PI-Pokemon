import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/PokémonLogo.svg"
import styles from './navbar.module.css'
import SearchBar from '../searchBar/SearchBar'

const Navbar = ({handleChange,handleSubmit}) => {
  return (
    <div className={styles.navbar}>
      <form className={styles.navbar} onChange={handleChange}>
        <img src={logo} alt="" />
        <SearchBar handleChange={handleChange}></SearchBar>
        <button type='submit'  onClick={handleSubmit}>Buscar</button>
        <Link to="/create">
          <button type='submit' >Crear Pokémon</button>
        </Link>

      </form>

    </div>

  )
}

export default Navbar