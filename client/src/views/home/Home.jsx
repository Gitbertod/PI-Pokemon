import React from 'react'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Cards from '../../components/cards/Cards'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>Home</div>
      <Cards></Cards>
    </>
  )
}

export default Home