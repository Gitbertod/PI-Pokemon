import {
    CREATE_POKEMON,
    GET_BY_NAME,
    GET_DETAIL,
    GET_POKEMONS,
    GET_TYPES,
    FILTERDBAPI,
    FILTER_TYPE,
    ORDER_NAME,
    ORDER_ATTACK
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
                copyPokemons: [...action.payload]
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
        case FILTERDBAPI:
            console.log("Enter")
            if (action.payload === "db") {
                const result = state.copyPokemons.filter((e) => e.created)
                return {
                    ...state,
                    allPokemons: result
                }
            } if (action.payload === "api") {
                const result = state.copyPokemons.filter((e) => e.created === false)
                return {
                    ...state,
                    allPokemons: result
                }
            } else {
                return {
                    ...state,
                    allPokemons: state.copyPokemons
                }
            }
        case FILTER_TYPE:
            const filterTypes = action.payload === "all"
                ? state.allPokemons
                : state.allPokemons.filter((p) => p.Types.includes(action.payload))
            return {
                ...state,
                allPokemons: filterTypes
            }
        case ORDER_NAME:
            if (action.payload === "a-z") {
                const orderByName = [...state.copyPokemons].sort((a, b) => a.nombre.localeCompare(b.name))
                return {
                    ...state,
                    allPokemons: [...orderByName]
                }
            } else if (action.payload === "z-a") {
                const orderByName = [...state.allPokemons].sort((a, b) => b.nombre.localeCompare(a.name))
                return {
                    ...state,
                    allPokemons: [...orderByName]
                }
            }
        case ORDER_ATTACK:
            const sortAttack = action.payload === "min"
                ? [...state.allPokemons].sort((a, b) => a.ataque - b.ataque)
                : [...state.allPokemons].sort((a, b) => b.ataque - a.ataque)
            return {
                ...state,
                allPokemons: sortAttack
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