const axios = require('axios');
const { Pokemon, Types } = require('../db')
const { Op } = require("sequelize");


const getPokemonController = async () => {
    const pokemonApi = await axios.get('http://pokeapi.co/api/v2/pokemon?limit=300&offset=0')
    const pokemonData = pokemonApi.data.results

    //Mapeo
    const promises = pokemonData.map(e => axios.get(e.url))
    const pokemonResults = await Promise.all(promises)

    const pokemonfromApi = await pokemonResults.map(p => {
        return {
            id: p.data.id,
            nombre: p.data.name,
            imagen: p.data.sprites.other.home.front_default,
            vida: p.data.stats[0].base_stat,
            ataque: p.data.stats[1].base_stat,
            defensa: p.data.stats[2].base_stat,
            velocidad: p.data.stats[5].base_stat,
            altura: p.data.height,
            peso: p.data.weight
        }
    })
    console.log("Entro en la funcion")
    return pokemonfromApi
}

const getPokemonByIdController = async (id) => {
    const allPokemons = await getPokemonController();
    const pokemonId = await allPokemons.find(e => e.id == id)

    if (pokemonId) {
        return pokemonId;
    } else {
        throw Error(`No existe el pokémon con el ID: ${id}`);
    }
}

const getPokemonByNameController = async (nombre) => {
    const name = nombre.toLowerCase()
    const allPokemons = await getPokemonController()
    const filtered = await allPokemons.filter(p => p?.nombre?.includes(name))
   
    return filtered
}

const createPokemonDbController = async (nombre, imagen, vida, ataque, defensa, velocidad) => {
   
    const [pokemon, created] = await Pokemon.findOrCreate({
        where: {
            nombre,
            imagen,
            vida,
            ataque,
            defensa,
            velocidad
        }
    })

    if (created) {
        const [typesDb] = await Types.findOrCreate({ where: { nombre: nombre } });
        await pokemon.addTypes(typesDb);
    }
    return pokemon

}
module.exports = {
    getPokemonController,
    getPokemonByNameController,
    getPokemonByIdController,
    createPokemonDbController
}