import {
    GET_DETAIL,
    GET_POKEMONS
} from "../actions/types"


let initialState = {
    allPokemons: [],
    copyPokemons: [],
    pokemonsDetail:[]
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
                }
        default:
            return { ...state }
    }
}

export default rootReducer