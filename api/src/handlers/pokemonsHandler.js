const {
    getPokemonController,
    getPokemonByIdController,
    getPokemonByNameController
} = require("../controllers/pokemonsControllers")

const getPokemonHandler = async (req, res) => {
    try {
        const { name } = req.query;
        if (name) {
            const response = "Estas en la ruta get" //await getPokemonByNameController()
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(400).json({ error: "Entraste al error de getPokemon" })
    }
    const response = await getPokemonController();
    return res.status(200).json(response)
}

const getPokemonByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
    } catch (error) {

    }
}

const createPokemonDb = async (nombre, imagen, vida, ataque, defensa, velocidad) => {

}

module.exports = {
    getPokemonHandler,
    getPokemonByIdHandler,
    createPokemonDb
}