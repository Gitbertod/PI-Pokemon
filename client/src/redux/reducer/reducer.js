import {
    CREATE_POKEMON,
    GET_BY_NAME,
    GET_DETAIL,
    GET_POKEMONS,
    GET_TYPES
} from "../actions/types"


let initialState = {
    allPokemons: [],
    copyPokemons: [],
    pokemon: [],
    pokemonDetail: {},
    types: []
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
                allPokemons: action.payload
            }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case CREATE_POKEMON:
            return {
                ...state,
            }    
        default:
            return { ...state }
    }
}

export default rootReducer