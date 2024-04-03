const axios = require('axios');
const { Pokemon, Types } = require('../db')
const { Op } = require("sequelize");


const getPokemonController = async () => {
    const pokemonApi = await axios.get('http://pokeapi.co/api/v2/pokemon')
    const pokemonData = pokemonApi.data.results

    //Mapeo
    const promises = pokemonData.map(e => axios.get(e.url))
    const pokemonResults = await Promise.all(promises)

    const pokemonfromApi = await pokemonResults.map(p => {
        return {
            id: p.data.id,
            nombre: p.data.name,
            imagen: p.data.sprites.other.home.front_default,
            vida:p.data.stats[0].base_stat,
            ataque:p.data.stats[1].base_stat,
            defensa:p.data.stats[2].base_stat,
            velocidad:p.data.stats[5].base_stat,
            altura:p.data.height,
            peso: p.data.weight
        }
    })
    return pokemonfromApi
}


const getPokemonByNameController = async (name) => {
    const allPokemons = await getPokemonController()
    return allPokemons
}

module.exports = {
    getPokemonController,
    getPokemonByNameController
}