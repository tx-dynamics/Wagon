const INITIAL_STATE = {
    homeModalRoute: true,
}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case "HomeModalRoute" :
        return {...state, homeModalRoute: action.payload}
        default:
            return state
    }
}