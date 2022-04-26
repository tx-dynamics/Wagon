import React from "react";
import { View, Modal, TouchableWithoutFeedback } from "react-native";
import AppText from 'src/components/AppText'
import styles from "./styles";
import AppButton from 'src/components/AppButton'
import { useNavigation } from '@react-navigation/native'


const ConfirmModal = ({ setConfirmModal, confirmModal, cancelTripModal,setCancelTripModal }) => {
    let navigation = useNavigation()

    const handleCancel = () => {
        setConfirmModal(!confirmModal)
        setCancelTripModal(!cancelTripModal)
    }
    const handleConfirm = () => {
        navigation.navigate("Home")
        setConfirmModal(!confirmModal)
        setCancelTripModal(!cancelTripModal)
    }


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={confirmModal}
            onRequestClose={() => setConfirmModal(!confirmModal)}
        >
            <TouchableWithoutFeedback style={styles.mainView} onPress={() => setConfirmModal(!confirmModal)}>
                <View
                    onPress={() => setConfirmModal(!homeMoreModal)}
                    style={styles.mainView}>
                    <View style={styles.homeModalCard}>
                        <AppText txtStyle={styles.headingTxt}>Confirm your cancellation</AppText>
                        <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
                            <AppButton
                                btnTxt={"Cancel"}
                                onPress={() => handleCancel()}
                                txtStyle={styles.btnTxt}
                                customButtonStyle={[styles.btnLogin,{backgroundColor:"#767676"}]}
                            />
                            <AppButton
                                btnTxt={"Confirm"}
                                onPress={() => handleConfirm()}
                                customButtonStyle={styles.btnLogin}
                                txtStyle={styles.btnTxt}

                            />
                        </View>
                    </View>

                </View>
            </TouchableWithoutFeedback>

        </Modal>
    );
};
export default ConfirmModal;









