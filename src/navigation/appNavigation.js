import React  from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from 'src/screens/appScreens/Home'
import DriverHome from 'src/screens/appScreens/DriverHome'
import SearchYourTrip from 'src/screens/appScreens/SearchYourTrip'
import ChooseYourTrip from 'src/screens/appScreens/ChooseYourTrip'
import SavedPlaced from 'src/screens/appScreens/SavedPlaced'
import AddNewPlaces from 'src/screens/appScreens/AddNewPlaces'
import DrawerContent from 'src/screens/appScreens/Drawer'
import YourTrips from 'src/screens/appScreens/YourTrips'
import TripDetails from 'src/screens/appScreens/TripDetails'
import DriverTripDetials from 'src/screens/appScreens/DriverTripDetials'
import SelectLanguage from 'src/screens/appScreens/SelectLanguage'
import Faqs from 'src/screens/appScreens/Faqs'
import Setting from 'src/screens/appScreens/Setting'
import About from 'src/screens/appScreens/About'
import PrivacyPolicy from 'src/screens/appScreens/PrivacyPolicy'
import EditProfile from 'src/screens/appScreens/EditProfile'
import ChooseTripDetails from 'src/screens/appScreens/ChooseTripDetails'
import { useSelector } from 'react-redux'

import { Colors, } from 'src/utils'
import styles from "../screens/appScreens/Drawer/styles";




const StackNavigator = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const appNavigation =() => {
    const switchApp = useSelector((state) => state.auth.switchApp)

    return(
        
        <StackNavigator.Navigator  
        screenOptions = {{
            headerShown: false
        }}>
            <StackNavigator.Screen name="Home" component={switchApp ? DriverHome :  Home}/>
            <StackNavigator.Screen name="SearchYourTrip" component={SearchYourTrip}/>
            <StackNavigator.Screen name="ChooseYourTrip" component={ChooseYourTrip}/>
            <StackNavigator.Screen name="SavedPlaced" component={SavedPlaced}/>
            <StackNavigator.Screen name="AddNewPlaces" component={AddNewPlaces}/>
            <StackNavigator.Screen name="YourTrips" component={YourTrips}/>
            <StackNavigator.Screen name="TripDetails" component={TripDetails}/>
            <StackNavigator.Screen name="SelectLanguage" component={SelectLanguage}/>
            <StackNavigator.Screen name="Faqs" component={Faqs}/>
            <StackNavigator.Screen name="Setting" component={Setting}/>
            <StackNavigator.Screen name="About" component={About}/>
            <StackNavigator.Screen name="PrivacyPolicy" component={PrivacyPolicy}/>
            <StackNavigator.Screen name="EditProfile" component={EditProfile}/>
            <StackNavigator.Screen name="DriverTripDetials" component={DriverTripDetials}/>
            <StackNavigator.Screen name="ChooseTripDetails" component={ChooseTripDetails}/>
            
           
        </StackNavigator.Navigator>
    )
}

const DrawerNavigation =() => {
    return(
        
    <Drawer.Navigator
        
        drawerContent={props => <DrawerContent {...props} /> }
        screenOptions={{gestureEnabled: true, headerShown: false,}}>
        <Drawer.Screen name="Drawer" component={appNavigation} />
    </Drawer.Navigator>
    )
}
 export default DrawerNavigation