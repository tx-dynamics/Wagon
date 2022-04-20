import React, { useEffect, useState } from 'react'
import { StatusBar, Image, View, TouchableOpacity, FlatList, Text } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Images, Colors } from 'src/utils'
import styles from './styles'
import Header from 'src/components/Header'
import AppText from 'src/components/AppText'

const SearchYourTrip = () => {
    let navigation = useNavigation()

    const searchTripList = [
        {
            id: 1,
            name: "Add Home",
            image: Images.MyBooking,

        },
        {
            id: 2,
            image: Images.PaymentMethod,
            name: "Add work",


        },
        {
            id: 3,
            image: Images.HelpCenter,
            name: "Add School",

        },
        {
            id: 3,
            image: Images.HelpCenter,
            name: "Add School",

        },


    ]

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
                headerName={"Search Your Trip"}
                headerNameShow
                headerCustomTxt={{ color: Colors.white }}
                headerContainer={{ backgroundColor: Colors.red }}
                customLeftImage={{ tintColor: Colors.white }}
                leftArrowIcon={() => navigation.goBack(null)} />
            <View>
                <View style={[styles.modalHeadingContainer, { marginTop: 25 }]}>
                    <Image source={Images.PickupLocation} style={styles.dropDownImg} resizeMode={"contain"} />
                    <AppText txtStyle={[styles.headingName, { color: Colors.black, paddingStart: 0 }]}>From where?</AppText>
                </View>
                <View style={styles.fromMainContainer}>
                    <View
                        style={styles.fromContainer}>
                        <AppText txtStyle={styles.fromTxt}>myhome street 123 , lahore</AppText>
                    </View>
                </View>
                <View style={styles.modalHeadingContainer}>
                    <Image source={Images.Location} style={styles.dropDownImg} resizeMode={"contain"} />
                    <AppText txtStyle={[styles.headingName, { color: Colors.black, paddingStart: 0 }]}>where to?</AppText>
                </View>
                <View style={styles.toMainContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("ChooseYourTrip")}
                        style={styles.fromContainer}>
                        <AppText txtStyle={styles.fromTxt}></AppText>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={searchTripList}
                    contentContainerStyle={styles.flatListContainer}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, }) => (
                        <View style={styles.listContiner}>
                            <View style={styles.innerContainer}>
                                <Image source={Images.Home} style={styles.listIcon} resizeMode={"contain"} />
                                <AppText txtStyle={[styles.headingName, { color: Colors.black, paddingStart: 0 }]}>{item?.name}</AppText>


                            </View>
                        </View>
                    )}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("SavedPlaced")}
            activeOpacity={0.8} style={styles.savedPlaceContainer}>
                <Image source={Images.Location} style={styles.listIcon} resizeMode={"contain"} />
                <AppText txtStyle={[styles.headingName, { color: Colors.black, paddingStart: 0 , flex:1}]}>Saved Places</AppText>
                <Image source={Images.ArrowRight} style={[styles.listIcon , {tintColor:Colors.black}]} resizeMode={"contain"} />


            </TouchableOpacity>
        </View>
    )
}

export default SearchYourTrip
