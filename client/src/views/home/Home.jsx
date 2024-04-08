import React from 'react'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Cards from '../../components/cards/Cards'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Cards></Cards>
    </>
  )
}

export default Home