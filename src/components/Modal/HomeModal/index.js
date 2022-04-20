import React from "react";
import { View, Modal, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import AppText from 'src/components/AppText'
import { useDispatch } from "react-redux"
import { setHomeModalRoute } from 'src/redux/actions/appActions'
import styles from "./styles";

const HomeModal = ({ setHomeModal, homeModal }) => {

    let dispatch = useDispatch()
    const handleLeaveNowRoute = () => {
        dispatch(setHomeModalRoute(true))
        setHomeModal(false)
    }
    const handleScheduleRoute = () => {
        dispatch(setHomeModalRoute(false))
        setHomeModal(false)
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={homeModal}
            onRequestClose={() => setHomeModal(!homeModal)}
        >
            <TouchableWithoutFeedback style={styles.mainView} onPress={() => setHomeModal(!homeModal)}>
                <View
                    onPress={() => setHomeModal(!homeMoreModal)}
                    style={styles.mainView}>
                    <View style={styles.homeModalCard}>
                        <TouchableOpacity onPress={() => handleLeaveNowRoute()}
                            style={styles.itemContainer}>
                            <AppText txtStyle={styles.headingTxt}>Leaving now</AppText>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleScheduleRoute()}
                            style={styles.itemContainer}>
                            <AppText txtStyle={styles.headingTxt}>Schedule</AppText>
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};
export default HomeModal;









