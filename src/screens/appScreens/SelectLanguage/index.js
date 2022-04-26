import React, { useEffect, useState } from 'react'
import { StatusBar, Image, View, TouchableOpacity, FlatList, Text } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Images, Colors } from 'src/utils'
import styles from './styles'
import Header from 'src/components/Header'
import AppText from 'src/components/AppText'
import AppButton from 'src/components/AppButton'
import { color } from 'react-native-reanimated'


const SearchYourTrip = () => {
    let navigation = useNavigation()

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
                headerName={"Select Language"}
                headerNameShow
                headerCustomTxt={{ color: Colors.white }}
                headerContainer={{ backgroundColor: Colors.red }}
                customLeftImage={{ tintColor: Colors.white }}
                leftArrowIcon={() => navigation.goBack(null)} />

            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginVertical: 20,marginHorizontal:20 }}>
                    <TouchableOpacity onPress={() => handleTripEvent()}
                        style={[styles.btnContainer, { backgroundColor: tripStatusCheck ? Colors.red : Colors.lightgrey }]}>
                        <AppText txtStyle={[styles.headingTxt, { color: tripStatusCheck ? Colors.white : Colors.black }]}>English</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTripEvent()}
                        style={[styles.btnContainer, { backgroundColor: tripStatusCheck ? Colors.lightgrey : Colors.red }]}>
                        <AppText txtStyle={[styles.headingTxt, { color: tripStatusCheck ? Colors.black : Colors.white }]}>Amharic</AppText>
                    </TouchableOpacity>
                </View>
            </View>
            <AppButton
                btnTxt={"Done"}
                onPress={() => navigation.goBack(null)}
                customButtonStyle={styles.btnLogin}
                txtStyle={{color:"rgba(255, 255, 255, 0.5)"}}
            />

        </View>


    )
}

export default SearchYourTrip
