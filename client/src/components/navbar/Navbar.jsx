import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/PokémonLogo.svg"
import styles from './navbar.module.css'
import SearchBar from '../searchBar/SearchBar'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <form className={styles.navbar}>
        <img src={logo} alt="" />
        <SearchBar></SearchBar>
        <button type='submit' >Buscar</button>
        <Link to="/create">
          <button type='submit' >Crear Pokémon</button>
        </Link>

      </form>

    </div>

  )
}

export default Navbar