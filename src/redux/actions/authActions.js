export const setUser = (data) => async (dispatch) => {
    dispatch({type: "User" , payload : data})
}
export const setSwitchApp = (data) => async (dispatch) => {
    dispatch({type: "SwitchApp" , payload : data})
}

