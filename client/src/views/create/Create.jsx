import React from 'react'
import styles from './create.module.css'
import BgVideo from '../../assets/scorbunny.mp4'
const Create = () => {
  return (
    <div className={styles.wrapper}>
      <video muted autoPlay loop>
        <source src={BgVideo} type="video/mp4" />
      </video>
      <h1 className={styles.titulo}>Crea tu Pokémon</h1>
      <form >
        <div className={styles.inputbox}>
          <label htmlFor="nombre"></label>
          <input
            type="text"
            name='nombre'
            placeholder='Nombre'
          />
          
        </div>
        <div className={styles.inputbox}>
          <label htmlFor="imagen"></label>
          <input
            type="text"
            name='imagen'
            
            placeholder='Link de la imagen'
           />
          <img src="" style={{ width: "200px" }} />
        </div>
        <div className={styles.inputbox}>
          <label htmlFor="vida"></label>
          <input
            type="text"
            name='vida'
            
            placeholder='Vida'

          />
        </div>
        <div className={styles.inputbox}>
          <label htmlFor="ataque"></label>
          <input
            type="text"
            name='ataque'
            placeholder='Ataque'
           
          />
        </div>

        <div className={styles.inputbox}>
          <label htmlFor="defensa"></label>
          <input
            type="text"
            name='defensa'
            placeholder='Defensa'
           
          />
        </div>
        <div className={styles.inputbox}>
          <label htmlFor="velocidad"></label>
          <input type="text" name='Velocidad' placeholder='Velocidad' />
        </div>
        <div className={styles.teamsSelect}>
          <label htmlFor="type">Tipo</label>
          <select
            name='type'
            
            multiple

          >
          </select>
        </div>

        <button type="submit" className={styles.btn}>CREAR</button>
      </form>
    </div>
  )
}

export default Create