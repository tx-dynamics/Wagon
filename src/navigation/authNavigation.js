import React  from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from 'src/screens/authScreens/Splash'
import SelectParentorDrive from 'src/screens/authScreens/SelectParentorDrive'

const AuthNavigator = createNativeStackNavigator()

const authNavigation =() => {
    return(
        
        <AuthNavigator.Navigator  
        screenOptions = {{
            headerShown: false
        }}>
            <AuthNavigator.Screen name="Splash" component={Splash}/>
            <AuthNavigator.Screen name="SelectParentorDrive" component={SelectParentorDrive}/>
           
        </AuthNavigator.Navigator>
    )
}
 export default authNavigation