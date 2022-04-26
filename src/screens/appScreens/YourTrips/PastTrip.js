import React from 'react'
import { Image, View, FlatList, } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Images, Colors } from 'src/utils'
import styles from './styles'
import AppText from 'src/components/AppText'

const Upcoming = () => {
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


    ]
    return (
        <View
            style={styles.upComingContainer}>

            <FlatList
                data={searchTripList}
                contentContainerStyle={styles.flatListContainer}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, }) => (
                    <View style={styles.listContiner}>
                        <AppText numberOfLines={1} txtStyle={[styles.listHeadingTxt, { marginTop: 5 }]}>24 Jan   09:35</AppText>
                        <View style={{ flexDirection: "row" ,marginTop:-8}}>
                            <AppText numberOfLines={2} txtStyle={[styles.listDesTxt]}>Jacks House</AppText>
                            <View style={{ height: 1, borderColor: Colors.black, borderTopWidth: 1, marginHorizontal: 10, flex: 1, alignSelf: "center", borderStyle: "dashed" }}></View>
                            <AppText numberOfLines={2} txtStyle={[styles.listDesTxt]}>White Field</AppText>
                        </View>
                            <Image source={Images.MapImage} style={{ height: 145, width: "100%",borderRadius: 10, marginTop:10  }} resizeMode={"cover"} />


                    </View>
                )}
            />

        </View>


    )
}

export default Upcoming
