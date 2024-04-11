import React from 'react'
import Card from "../card/Card"
import styles from './cards.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../redux/actions/actions'


const Cards = ({nData}) => {
  const dispatch = useDispatch()
  const allPokemons = useSelector((state) => state.copyPokemons)
  const pokemonList = nData


  useEffect(
    () => {
      const traer = async () => {
        try {
          dispatch(getPokemons())
        } catch (error) {
          console.log(error.message)
        }
      }
      traer()
    }, [dispatch]
  )

  
  return (
    <>
      <div className={styles.cards}>
        
        {
          pokemonList.length > 0 ? (
            pokemonList.map((pokemon, index) => (
              <Card {...pokemon} key={index} ></Card>
            ))
          )
            : (
              <h1>No hay coincidencias</h1>
            )
        }
      </div>

    </>
  )
}

export default Cards