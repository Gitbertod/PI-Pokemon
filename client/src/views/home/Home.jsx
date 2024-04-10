import React from 'react'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Cards from '../../components/cards/Cards'
import Navbar from '../../components/navbar/Navbar'
import { getPokemons, getByName } from '../../redux/actions/actions'

const Home = () => {
  const allPokemons = useSelector((state) => state.allPokemons)
  const nData = allPokemons
  const dispatch = useDispatch()

  const [searchString, setSearchString] = useState("");
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

  function handleChange(e) {
    e.preventDefault()
    setSearchString(e.target.value)
  }

  function handleSubmit() {
    e.preventDefault()
    dispatch(getDriverByName(searchString))
  }
  return (
    <>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit}></Navbar>
      <div></div>
      <Cards nData={nData} />
    </>
  )
}

export default Home