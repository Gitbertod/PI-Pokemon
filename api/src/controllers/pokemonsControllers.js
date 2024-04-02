const axios = require('axios');
const {Pokemon,Types} = require('../db')
const{Op} = require("sequelize");


const getPokemonController = async () =>{
    const pokemonApi = await axios.get('https://pokeapi.co/api/v2/pokemon')
    const pokeSaludo = "Hola pokemon"
    return pokemonApi.data
}

const getPokemonByNameController = async (name) =>{
    const allPokemons = await getPokemonController()
    return allPokemons
} 

module.exports = {
    getPokemonController,
    getPokemonByNameController
}