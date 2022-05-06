const INITIAL_STATE = {
    user: null,
    switchApp:false
}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case "User" :
        return {...state, user: action.payload}
        case "SwitchApp" :
        return {...state, switchApp: action.payload}
        default:
            return state
    }
}