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


const SearchYourTrip = () => {
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
                headerName={"Settings"}
                headerNameShow
                headerCustomTxt={{ color: Colors.white }}
                headerContainer={{ backgroundColor: Colors.red }}
                customLeftImage={{ tintColor: Colors.white }}
                leftArrowIcon={() => navigation.goBack(null)} />

            <View style={{ flex: 1, marginTop: 10 }}>
                <TouchableOpacity onPress ={() => navigation.navigate("EditProfile")}
                    style={styles.mainListContainer}>
                    <View
                        style={{ flexDirection: 'row', }}>
                        <Image style={styles.settingIcons} source={Images.EditProfile} />
                        <AppText txtStyle={[styles.headingTxt]}>Edit profile</AppText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PrivacyPolicy")}
                    style={styles.mainListContainer}>
                    <View
                        style={{ flexDirection: 'row', }}>
                        <Image style={styles.settingIcons} source={Images.Privacy} />
                        <AppText txtStyle={[styles.headingTxt]}>Privacy and Policy</AppText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("About")}
                    style={styles.mainListContainer}>
                    <View
                        style={{ flexDirection: 'row', }}>
                        <Image style={styles.settingIcons} source={Images.Aboutus} resizeMode={"contain"} />
                        <AppText txtStyle={[styles.headingTxt]}>About us</AppText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(setUser(true))}
                    style={[styles.mainListContainer, {backgroundColor:Colors.red}]}>
                    <View
                        style={{ flexDirection: 'row', }}>
                        <Image style={[styles.settingIcons,{tintColor:Colors.white}]} source={Images.LogoutIcon} />
                        <AppText txtStyle={[styles.headingTxt,{color:Colors.white, fontSize:14}]}>Log Out</AppText>
                    </View>
                </TouchableOpacity>

            </View>
    
        </View>


    )
}

export default SearchYourTrip
