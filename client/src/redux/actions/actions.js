import axios from "axios";
import { GET_DETAIL, GET_POKEMONS } from "./types";

export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/pokemons");
            console.log(data)

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
            const { data } = await axios.get(`http://localhost:3001/pokemons${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}