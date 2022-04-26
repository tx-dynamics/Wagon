import React, { useEffect, useState } from 'react'
import { StatusBar, Image, View, TouchableOpacity, FlatList } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Images, Colors } from 'src/utils'
import styles from './styles'
import Header from 'src/components/Header'
import AppText from 'src/components/AppText'
import DayViewModalView from 'src/components/Modal/DayViewModal'


const SearchYourTrip = () => {
    let navigation = useNavigation()

    const [openDayModal, setOpenDayModal] = useState(false)

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
                headerName={"Choose Your Trip"}
                headerNameShow
                headerCustomTxt={{ color: Colors.white }}
                headerContainer={{ backgroundColor: Colors.red }}
                customLeftImage={{ tintColor: Colors.white }}
                leftArrowIcon={() => navigation.goBack(null)} />

            <TouchableOpacity onPress={() => setOpenDayModal(!openDayModal)}
                style={{ borderRadius: 10, borderColor: Colors.black, borderWidth: 1, height: 51, width: "90%", alignSelf: "center", marginTop: 20, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <AppText txtStyle={styles.weekDayTxt}>Tuesday</AppText>
                <Image source={Images.DropDown} style={styles.dropDownIcon} resizeMode={"contain"} />
            </TouchableOpacity>
            <FlatList
                data={searchTripList}
                contentContainerStyle={styles.flatListContainer}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, }) => (
                    <View style={styles.listContiner}>
                        <View style={styles.innerContainer}>
                            <View style={styles.leftViewContainer}>
                                <View style={{alignSelf:"center"}}>
                                    <View style={styles.leftWhiteView}></View>
                                </View>
                                <View>
                                        <AppText txtStyle={[styles.listHeadingTxt,{marginTop:10}]}>Tue</AppText>
                                        <AppText txtStyle={[styles.listDesTxt, { color: Colors.black,}]}>07:03 Am</AppText>

                                    <AppText txtStyle={[styles.listHeadingTxt, { marginTop: 40 }]}>Arrive</AppText>
                                    <AppText txtStyle={[styles.listDesTxt]}>07:03 Am</AppText>
                                </View>
                            </View>
                            <View style={styles.rightViewContainer}>
                                <View style={{ width: "85%" }}>
                                    <AppText numberOfLines={2} txtStyle={[styles.listHeadingTxt, { marginTop: 15 }]}>4 minutes from Mall of Lahore</AppText>
                                    <AppText numberOfLines={2} txtStyle={[styles.listDesTxt, { color: Colors.black, }]}>Mall Of Lahore , Main Street 0001 </AppText>
                                    <AppText numberOfLines={2} txtStyle={[styles.listHeadingTxt, { marginTop: 15 }]}>4 minutes to Lahore Zoo </AppText>
                                    <AppText numberOfLines={2} txtStyle={[styles.listDesTxt, { color: Colors.black, }]}>Zoo Of Lahore , Mall Road of Lahore</AppText>
                                </View>
                                <View>
                                    <View style={styles.rightWhiteView}></View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.priceContainer}>
                            <AppText txtStyle={[styles.listDesTxt, { color: Colors.white, }]}>$20 </AppText>
                        </View>
                    </View>
                )}
            />


            <DayViewModalView
                setOpenDayModal={setOpenDayModal}
                openDayModal={openDayModal}
            />
        </View>
    )
}

export default SearchYourTrip
