import {
    GET_POKEMONS
} from "../actions/types"


let initialState = {
    allPokemons:[]
}

function rootReducer(state = initialState,action){
switch (action.type) {
    case GET_POKEMONS:
        
        break;

    default:
        break;
}
}

export default rootReducer