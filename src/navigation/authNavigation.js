import React  from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from 'src/screens/authScreens/Splash'
import SelectParentorDrive from 'src/screens/authScreens/SelectParentorDrive'
import OnBoarding from 'src/screens/authScreens/OnBoarding'
import Login from 'src/screens/authScreens/Login'
import Signup from 'src/screens/authScreens/Signup'
import PhoneNumber from 'src/screens/authScreens/PhoneNumber'
import OTPVerify from 'src/screens/authScreens/OTPVerify'

const AuthNavigator = createNativeStackNavigator()

const authNavigation =() => {
    return(
        
        <AuthNavigator.Navigator  
        screenOptions = {{
            headerShown: false
        }}>
            <AuthNavigator.Screen name="Splash" component={Splash}/>
            <AuthNavigator.Screen name="SelectParentorDrive" component={SelectParentorDrive}/>
            <AuthNavigator.Screen name="OnBoarding" component={OnBoarding}/>
            <AuthNavigator.Screen name="Login" component={Login}/>
            <AuthNavigator.Screen name="Signup" component={Signup}/>
            <AuthNavigator.Screen name="PhoneNumber" component={PhoneNumber}/>
            <AuthNavigator.Screen name="OTPVerify" component={OTPVerify}/>
           
        </AuthNavigator.Navigator>
    )
}
 export default authNavigation