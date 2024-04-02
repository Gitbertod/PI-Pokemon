const { Router } = require("express");

const pokemonsRouter = Router();

const {
    getPokemonHandler,
    getPokemonByIdHandler,
    createPokemonDb
} = require('../handlers/pokemonsHandler')

pokemonsRouter.get("/",getPokemonHandler);
pokemonsRouter.get("/:idPokemon",getPokemonByIdHandler);
pokemonsRouter.post("/pokemons",createPokemonDb)


module.exports = pokemonsRouter;