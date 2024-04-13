import axios from "axios";
import { GET_DETAIL, GET_POKEMONS, GET_BY_NAME, GET_TYPES } from "./types";

export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/pokemons");


            return dispatch({
                type: GET_POKEMONS,
                payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getDetail = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/pokemons/` + id);

            return dispatch({
                type: GET_DETAIL,
                payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getByName = (nombre) => {
    return async (dispatch) => {
        try {

            const { data } = await axios.get(`http://localhost:3001/pokemons?nombre=${nombre}`);

            return dispatch({
                type: GET_BY_NAME,
                payload: data
            });
        } catch (error) {
            console.log(error.message)
        }
    }

}

export const getTypes = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/types/', {});
            return dispatch({
                type: GET_TYPES,
                payload: data
            });
        } catch (error) {
            console.log(error.message)
        }
    }
}

// export const createPokemon = (info) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.post('http://localhost:3001/pokemons/', info)
//             dispatch({
//                 type: CREATE_POKEMON,
//                 payload: response.data
//             });
//             alert("Pokemon creado con exito");
//             return response;
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
// }

