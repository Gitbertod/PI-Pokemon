import React from 'react'
import { Link } from 'react-router-dom'
import styles from './card.module.css'



const Card = ({ id,nombre,imagen, types }) => {
  //const { id, nombre, imagen, tipos } = pokemon
  return (
    <div key={id} className={styles.card}>
      <h3>Nombre: {nombre}</h3>
      <p>Tipo: {types}</p>
      <Link to={`/detail/${id}`} key={id}>
        <img src={imagen}></img>
      </Link>
    </div>
  )
}

export default Card