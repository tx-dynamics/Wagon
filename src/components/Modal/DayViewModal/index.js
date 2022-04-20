import React from "react";
import { View, Modal, TouchableOpacity, TouchableWithoutFeedback, FlatList } from "react-native";
import AppText from 'src/components/AppText'
import { useDispatch } from "react-redux"
import { Images, Colors } from 'src/utils'

// import { setHomeModalRoute } from 'src/redux/actions/appActions'
import styles from "./styles";

const HomeModal = ({ setOpenDayModal, openDayModal }) => {

    let dispatch = useDispatch()
    const calendarDay = [
        {
            id: 1,
            name: "Monday",
        },
        {
            id: 2,
            name: "Tuesday",
        },
        {
            id: 3,
            name: "Wednesday",

        },
        {
            id: 4,
            name: "Thursday",
        },
        {
            id: 5,
            name: "Friday",
        },
        {
            id: 6,
            name: "Saturday",

        },
        {
            id: 7,
            name: "Sunday",

        },


    ]
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={openDayModal}
            onRequestClose={() => setOpenDayModal(!openDayModal)}>
            <TouchableWithoutFeedback style={styles.mainView} onPress={() => setOpenDayModal(!openDayModal)}>
                <View
                    onPress={() => setOpenDayModal(!homeMoreModal)}
                    style={styles.mainView}>
                    <View style={styles.homeModalCard}>
                        <FlatList
                            data={calendarDay}
                            contentContainerStyle={styles.flatListContainer}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item,index }) => (
                                <View style={styles.calendatListContiner}>
                                    <View style={styles.innerContainer}>
                                        <AppText txtStyle={[styles.calendarName, {color: index ===1 ? Colors.red : Colors.black}]}>{item?.name}</AppText>


                                    </View>
                                </View>
                            )}
                        />

                    </View>

                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};
export default HomeModal;









