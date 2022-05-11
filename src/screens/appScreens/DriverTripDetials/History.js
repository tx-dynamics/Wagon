import React from 'react'
import { Image, View, FlatList, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Images, Colors } from 'src/utils'
import styles from './styles'
import { useSelector } from 'react-redux'
import AppText from 'src/components/AppText'

const Status = () => {
    let navigation = useNavigation()
    const switchApp = useSelector((state) => state.auth.switchApp)

    const searchTripList = [
        {
            id: 1,
            name: "Add Home",
            image: Images.MyBooking,
            status : true

        },
        {
            id: 2,
            image: Images.PaymentMethod,
            name: "Add work",
            status : true


        },
        {
            id: 3,
            image: Images.HelpCenter,
            name: "Add School",
            status : false


        },


    ]
    return (
        <View
            style={styles.upComingContainer}>

            <FlatList
                data={searchTripList}
                contentContainerStyle={styles.flatListContainer}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.listContiner}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ backgroundColor: item.status  === true? Colors.red :"#C4C4C4", height: 23, width: 23, borderRadius: 23, justifyContent: "center", alignSelf: "center" }}>
                                <Image source={Images.Location} style={styles.dropDownImg} resizeMode={"contain"} />
                            </View>
                            <AppText txtStyle={[styles.dateTxt]}>10:30</AppText>
                            <View style={{ flex: 1, }}>
                                <AppText numberOfLines={1} txtStyle={[styles.headingListTxt]}>Pick up</AppText>
                                <AppText numberOfLines={1} txtStyle={[styles.desListTxt]}>345 haledon ave, new jersy 09876</AppText>
                            </View>
                            <TouchableOpacity
                                style={[styles.btnListContainer, {backgroundColor: item.status === true ? Colors.red :"rgba(174, 0, 1, 0.5)"}]}>
                                <AppText txtStyle={[styles.btnListTxt]}>See details</AppText>
                            </TouchableOpacity>
                        </View>
                        {index === searchTripList.length - 1 ?
                            null :
                            <View style={{ height: 50, borderLeftColor: item.status  === true? Colors.red :"#C4C4C4", borderLeftWidth: 1, marginStart: 10, borderStyle: "dashed",  marginVertical:-10 }}></View>

                        }


                    </View>
                )}
            />

        </View>


    )
}

export default Status
