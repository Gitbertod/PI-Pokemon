import React from 'react'
import Card from "../card/Card"
import styles from './cards.module.css'


const Cards = ({ nData }) => {
  const pokemonList = nData
  //console.log(pokemonList)
  return (
    <>
      <div className={styles.cards}>
        {pokemonList.map((pokemon) => <Card pokemon={pokemon} key={pokemon.id}></Card>)}
      </div>

    </>
  )
}

export default Cards