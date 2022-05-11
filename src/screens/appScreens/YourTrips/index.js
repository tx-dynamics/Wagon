import React, { useEffect, useState } from 'react'
import { StatusBar, Image, View, TouchableOpacity, FlatList, Text } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Images, Colors } from 'src/utils'
import styles from './styles'
import Header from 'src/components/Header'
import AppText from 'src/components/AppText'
import UpcomingTrip from './UpcomingTrip'
import PastTrip from './PastTrip'
import { useSelector } from 'react-redux'

const SearchYourTrip = () => {
    let navigation = useNavigation()
    const [tripStatusCheck, setTripStatusCheck] = useState(true)
    const switchApp = useSelector((state) => state.auth.switchApp)

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
                headerName={"Your Trips"}
                headerNameShow
                headerCustomTxt={{ color: Colors.white }}
                headerContainer={{ backgroundColor: Colors.red }}
                customLeftImage={{ tintColor: Colors.white }}
                leftArrowIcon={() => navigation.goBack(null)}
                thirdIcon
                RightImage={Images.Plus}
                rightArrowIcon={() => switchApp ? null : navigation.navigate("SearchYourTrip")} />

            <View style={{ flex: 1 ,marginHorizontal:20}}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginVertical: 15}}>
                    <TouchableOpacity onPress={() => handleTripEvent()}
                        style={[styles.btnContainer, { backgroundColor: tripStatusCheck ? Colors.red : Colors.lightgrey }]}>
                        <AppText txtStyle={[styles.headingTxt, { color: tripStatusCheck ? Colors.white : Colors.black }]}>Upcoming</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTripEvent()}
                        style={[styles.btnContainer, { backgroundColor: tripStatusCheck ? Colors.lightgrey : Colors.red }]}>
                        <AppText txtStyle={[styles.headingTxt, { color: tripStatusCheck ? Colors.black : Colors.white }]}>Past</AppText>
                    </TouchableOpacity>
                </View>
                <View style={{ height:1, backgroundColor:Colors.black,}}></View>

                {tripStatusCheck ?
                    <UpcomingTrip />
                    :
                    <PastTrip />

                }



            </View>

        </View>


    )
}

export default SearchYourTrip
