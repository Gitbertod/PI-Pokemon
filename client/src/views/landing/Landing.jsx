import React from 'react'
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div>
      <h3>Bienvenido a la API de Pokemon</h3>
      <Link to="/home">
        <button >ENTRAR</button>
      </Link>
    </div>

  )
}

export default Landing