import React, { useState } from "react";
import { View, Modal, FlatList, TouchableWithoutFeedback, Image, TouchableOpacity } from "react-native";
import AppText from 'src/components/AppText'
import styles from "./styles";
import { Images } from 'src/utils'
import ConfirmModalView from 'src/components/Modal/ConfirmModal'


const CancelTripModal = ({ setCancelTripModal, cancelTripModal }) => {
    const [confirmModal, setConfirmModal] = useState(false)


    const searchTripList = [
        {
            id: 1,
            name: "My travel supplier declares bankruptcy",

        },
        {
            id: 2,
            image: Images.PaymentMethod,
            name: "There was a terrorist act where i’m travelling",
            des: "El-tahir square"



        },
        {
            id: 3,
            image: Images.HelpCenter,
            des: "I need to cancel my trip for any reason",
            name: "I need to cancel my trip for any reason",

        },
        {
            id: 3,
            image: Images.HelpCenter,
            des: "El-tahir square",
            name: "I have no reason to cancel the trip",

        },
        {
            id: 3,
            image: Images.HelpCenter,
            des: "El-tahir square",
            name: "My travel supplier declares bankruptcy",

        },
        {
            id: 3,
            image: Images.HelpCenter,
            des: "El-tahir square",
            name: "There was a terrorist act where i’m travelling",

        },
        {
            id: 3,
            image: Images.HelpCenter,
            des: "El-tahir square",
            name: "I need to cancel my trip for any reason",

        },
        {
            id: 3,
            image: Images.HelpCenter,
            des: "El-tahir square",
            name: "I have no reason to cancel the trip",

        },
        {
            id: 3,
            image: Images.HelpCenter,
            des: "El-tahir square",
            name: "My travel supplier declares bankruptcy",

        },


    ]


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={cancelTripModal}
            onRequestClose={() => setCancelTripModal(!cancelTripModal)}
        >
            <TouchableWithoutFeedback style={styles.mainView} onPress={() => setCancelTripModal(!cancelTripModal)}>
                <View
                    onPress={() => setCancelTripModal(!homeMoreModal)}
                    style={styles.mainView}>
                    <View style={styles.homeModalCard}>
                        <AppText txtStyle={styles.headingTxt}>Why do you want to cancel the trip?</AppText>
                        <FlatList
                            data={searchTripList}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.flatListContainer}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item, }) => (
                                <TouchableOpacity onPress={() => setConfirmModal(!confirmModal)}
                                 style={styles.listContiner}>
                                    <View style={styles.innerContainer}>
                                        <View style={{ flex: 1 }}>
                                            <AppText txtStyle={styles.listItemName}>{item?.name}</AppText>
                                        </View>


                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <ConfirmModalView
                setConfirmModal={setConfirmModal}
                confirmModal={confirmModal}
                setCancelTripModal={setCancelTripModal}
                cancelTripModal={cancelTripModal}

            />

        </Modal>
    );
};
export default CancelTripModal;









