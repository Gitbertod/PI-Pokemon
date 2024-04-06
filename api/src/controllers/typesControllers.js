const axios = require('axios');
const { Type } = require('../db')

const getTypesController = async () => {
    const types = await Type.findAll();
    
    console.log(types)

    const typesApi = await axios.get('https://pokeapi.co/api/v2/type');
    const apiResults = typesApi.data.results;

    // Mapeo
    const typesDataApi = apiResults.map(e => ({ nombre: e.name }));

    // Guardar en la base de datos
    const allTypes = await Type.bulkCreate(typesDataApi);
    return allTypes ;
}

module.exports = { getTypesController };

