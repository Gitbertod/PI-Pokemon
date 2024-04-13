import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import styles from './create.module.css'
import BgVideo from '../../assets/scorbunny.mp4'
import { getTypes } from '../../redux/actions/actions';
import { postPokemon } from '../../controller/controller';
const Create = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const navigate = useNavigate()
  const initialPokemon = {
    nombre: "",
    types: [],
    imagen: "",
    vida: 0,
    ataque: 0,
    defensa: 0,
    velocidad: 0
  }
  const [newPokemon, setNewPokemon] = useState({ ...initialPokemon });

  function handleChange(e) {
    setNewPokemon({
      ...newPokemon,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postPokemon(newPokemon);
    navigate('/home')

  }

  const handleSelect = (event) => {
    setNewPokemon({
      ...newPokemon,
      types: [...newPokemon.types, event.target.value]
    });

  };

  useEffect(() => {
    dispatch(getTypes());
  }, []);
  return (
    <div className={styles.wrapper}>
      <video muted autoPlay loop>
        <source src={BgVideo} type="video/mp4" />
      </video>
      <h1 className={styles.titulo}>Crea tu Pokémon</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputbox}>
          <label htmlFor="nombre"></label>
          <input
            type="text"
            name='nombre'
            placeholder='Nombre'
            onChange={handleChange}
            value={newPokemon.nombre}
          />

        </div>

        <div className={styles.inputbox}>
          <label htmlFor="imagen"></label>
          <input
            type="text"
            name='imagen'
            onChange={handleChange}
            placeholder='Link de la imagen'
            value={newPokemon.imagen}
          />
          <img src={newPokemon.imagen} style={{ width: "200px" }} />
        </div>

        <div className={styles.inputbox}>
          <label htmlFor="vida"></label>
          <input
            type="number"
            name='vida'
            onChange={handleChange}
            placeholder='Vida'
            value={newPokemon.vida}

          />
        </div>
        <div className={styles.inputbox}>
          <label htmlFor="ataque"></label>
          <input
            type="number"
            name='ataque'
            placeholder='Ataque'
            onChange={handleChange}
            value={newPokemon.ataque}
          />
        </div>

        <div className={styles.inputbox}>
          <label htmlFor="defensa"></label>
          <input
            type="number"
            name='defensa'
            placeholder='Defensa'
            onChange={handleChange}
            value={newPokemon.defensa}
          />
        </div>
        <div className={styles.inputbox}>
          <label htmlFor="velocidad"></label>
          <input
            type="number"
            name='velocidad'
            placeholder='Velocidad'
            onChange={handleChange}
            value={newPokemon.velocidad}

          />
        </div>
        <div className={styles.teamsSelect}>
          <h3>Tipo</h3>
          {types.map((e, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name="types"
                value={e.id}
                onChange={(event) => handleSelect(event)}
              />
              {e.nombre}
            </label>
          ))}
        </div>

        <button type="submit" className={styles.btn}>CREAR</button>
      </form>
    </div>
  )
}

export default Create