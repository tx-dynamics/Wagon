import React, { useEffect, useState } from 'react'
import { StatusBar, Image, View, TouchableOpacity, FlatList, Text } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Images, Colors } from 'src/utils'
import styles from './styles'
import Header from 'src/components/Header'
import AppText from 'src/components/AppText'
import { useDispatch } from "react-redux"
import { setUser } from 'src/redux/actions/authActions'

import AppButton from 'src/components/AppButton'
import { color } from 'react-native-reanimated'


const About = () => {
    let navigation = useNavigation()
    let dispatch = useDispatch()


    const [tripStatusCheck, setTripStatusCheck] = useState(true)
    const handleTripEvent = () => {
        setTripStatusCheck(!tripStatusCheck)

    }



    return (
        <View
            style={styles.container}>
            <StatusBar
                translucent={false}
                hidden={false}
                barStyle={"light-content"}
                backgroundColor={Colors.red} />
            <Header
                LeftImage={Images.LeftArrow}
                headerName={"Privacy and policy"}
                headerNameShow
                headerCustomTxt={{ color: Colors.white }}
                headerContainer={{ backgroundColor: Colors.red }}
                customLeftImage={{ tintColor: Colors.white }}
                leftArrowIcon={() => navigation.goBack(null)} />

            <View style={styles.privacyContainer}>
                <View style={styles.privacyInnerContainer}>
                     <AppText txtStyle={styles.aboutDesTxt}>
                        Lorem ipsum dolor sit amet, consectetur a adipiscing elitempor, convallis interduction id et, sed ut egestas. Aliquam volutpat leo, sodales proin sapien turpis id ac dictumst. Aenean tortor nulla viverra elit iaculis in. A, et metus ac, fermentum netus dolor. Orcien semper dui amet lacus, facilisi us sit enimd a. Gravida eu semper purus ornare. Diamu ornare amet tincidunt. Auctor lorem quisan habitasse cursus. Viverra ac eu dui, est pick condimentum mauris ornare.{'\n'}
                     </AppText>
                </View>
                <View style={styles.btnContainer}>
                <AppButton
                        btnTxt={"Deny"}
                        txtStyle={styles.btnTxt}
                        
                        customButtonStyle={[styles.btnPrivacy,{backgroundColor:"rgba(174, 0, 1, 0.5)"}]}
                    />
                <AppButton
                        btnTxt={"Allow"}
                        customButtonStyle={[styles.btnPrivacy,{borderWidth:1, borderColor:Colors.black}]}
                    />
                </View>
             </View>

        </View>


    )
}

export default About
