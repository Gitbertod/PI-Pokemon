import axios from "axios"

export async function postPokemon(create){
    try {
        const response = await axios.post("http://localhost:3001/pokemons", create);
        if (response.data) {
          alert("Pokemon creado con éxito");
        } else {
          alert("Error al crear el pokemon");
        }
    } catch (error) {
        
    }
}