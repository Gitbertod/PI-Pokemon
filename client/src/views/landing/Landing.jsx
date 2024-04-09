import React from 'react'
import { Link } from "react-router-dom";
import styles from "./landing.module.css";
import logo from "../../assets/PokémonLogo.svg"
import BgVideo from "../../assets/intro.mp4"



const Landing = () => {
  return (
    <div className={styles.landing}>
      <video muted autoPlay loop>
        <source src={BgVideo} type="video/mp4" />
      </video>
      <h3>Bienvenido a la API </h3>
      <img src={logo}></img>
      <Link to="/home">
        <button >ENTRAR</button>
      </Link>
    </div>

  )
}

export default Landing