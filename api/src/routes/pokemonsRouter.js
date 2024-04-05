const { Router } = require("express");

const pokemonsRouter = Router();

const {
    getPokemonHandler,
    getPokemonByIdHandler,
    createPokemonDbHandler
} = require('../handlers/pokemonsHandler')

pokemonsRouter.get("/",getPokemonHandler);
pokemonsRouter.get("/:id",getPokemonByIdHandler);
pokemonsRouter.post("/pokemons",createPokemonDbHandler)


module.exports = pokemonsRouter;