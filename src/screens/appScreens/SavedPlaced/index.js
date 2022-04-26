import React from 'react'
import { StatusBar, Image, View, TouchableOpacity, FlatList, Text } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Images, Colors } from 'src/utils'
import styles from './styles'
import Header from 'src/components/Header'
import AppText from 'src/components/AppText'

const SavedPlaced = () => {
    let navigation = useNavigation()

    const searchTripList = [
        {
            id: 1,
            name: "Add Home",
            image: Images.MyBooking,
            des: "El-tahir square"

        },
        {
            id: 2,
            image: Images.PaymentMethod,
            name: "Add work",
            des: "El-tahir square"



        },
        {
            id: 3,
            image: Images.HelpCenter,
            des: "El-tahir square",
            name: "Add School",

        },
        {
            id: 3,
            image: Images.HelpCenter,
            des: "El-tahir square",
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
                headerName={"Saved Places"}
                headerNameShow
                headerCustomTxt={{ color: Colors.white }}
                headerContainer={{ backgroundColor: Colors.red }}
                customLeftImage={{ tintColor: Colors.white }}
                leftArrowIcon={() => navigation.goBack(null)} />
            <View>
                <FlatList
                    data={searchTripList}
                    contentContainerStyle={styles.flatListContainer}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, }) => (
                        <View style={styles.listContiner}>
                            <View style={styles.innerContainer}>
                                <Image source={Images.Home} style={styles.listIcon} resizeMode={"contain"} />
                                <View style={{ flex: 1 }}>
                                    <AppText txtStyle={[styles.headingName, { color: Colors.black, paddingStart: 0 }]}>{item?.name}</AppText>
                                    <AppText txtStyle={[styles.desName]}>{item?.des}</AppText>
                                </View>
                                <Image source={Images.Delete} style={styles.listIcon} resizeMode={"contain"} />


                            </View>
                        </View>
                    )}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("AddNewPlaces")}
            activeOpacity={0.8} style={styles.savedPlaceContainer}>
                <Image source={Images.Location} style={[styles.locationIcon]} resizeMode={"contain"} />
                <AppText txtStyle={[styles.headingName, { color: Colors.black, paddingStart: 0,  }]}>Add new places</AppText>


            </TouchableOpacity>
        </View>
    )
}

export default SavedPlaced
