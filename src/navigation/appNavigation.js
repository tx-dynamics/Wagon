import React  from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'src/screens/appScreens/Home'
import SearchYourTrip from 'src/screens/appScreens/SearchYourTrip'
import ChooseYourTrip from 'src/screens/appScreens/ChooseYourTrip'
import SavedPlaced from 'src/screens/appScreens/SavedPlaced'
import AddNewPlaces from 'src/screens/appScreens/AddNewPlaces'


const StackNavigator = createNativeStackNavigator()

const appNavigation =() => {
    return(
        
        <StackNavigator.Navigator  
        screenOptions = {{
            headerShown: false
        }}>
            <StackNavigator.Screen name="Home" component={Home}/>
            <StackNavigator.Screen name="SearchYourTrip" component={SearchYourTrip}/>
            <StackNavigator.Screen name="ChooseYourTrip" component={ChooseYourTrip}/>
            <StackNavigator.Screen name="SavedPlaced" component={SavedPlaced}/>
            <StackNavigator.Screen name="AddNewPlaces" component={AddNewPlaces}/>
            
           
        </StackNavigator.Navigator>
    )
}
 export default appNavigation