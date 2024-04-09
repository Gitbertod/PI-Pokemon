import React from 'react'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Cards from '../../components/cards/Cards'
import Navbar from '../../components/navbar/Navbar'
import { getPokemons } from '../../redux/actions/actions'

const Home = () => {
  const allPokemons = useSelector((state) => state.allPokemons)
  const nData = allPokemons
  const dispatch = useDispatch()
  console.log(allPokemons)
  try {

  } catch (error) {

  }
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
    }, [dispatch])
  return (
    <>
      <Navbar></Navbar>
      <div></div>
      <Cards nData={nData} />
    </>
  )
}

export default Home