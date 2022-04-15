import React from "react"
import AuthNavigator from 'src/navigation/authNavigation'
import AppNavigator from 'src/navigation/appNavigation'
import { useSelector} from 'react-redux'


const MainNavigator = () => {
    const user = useSelector((state) => state.auth.user)

    if (user !== null) {
        return <AppNavigator />
    }
    else {
        return <AuthNavigator />

    }


}
export default MainNavigator

