import {
    GET_BY_NAME,
    GET_DETAIL,
    GET_POKEMONS
} from "../actions/types"


let initialState = {
    allPokemons: [],
    copyPokemons: [],
    pokemon: [],
    pokemonDetail: {}
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                copyPokemons: action.payload
            }
        case GET_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                pokemon: action.payload
            }
        default:
            return { ...state }
    }
}

export default rootReducer