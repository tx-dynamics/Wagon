import React  from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'src/screens/appScreens/Home'


const StackNavigator = createNativeStackNavigator()

const appNavigation =() => {
    return(
        
        <StackNavigator.Navigator  
        screenOptions = {{
            headerShown: false
        }}>
            <StackNavigator.Screen name="Home" component={Home}/>
            
           
        </StackNavigator.Navigator>
    )
}
 export default appNavigation