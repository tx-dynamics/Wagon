import React from "react";
import { View, Modal, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import AppText from 'src/components/AppText'
import { useDispatch } from "react-redux"
import { setHomeModalRoute } from 'src/redux/actions/appActions'
import styles from "./styles";
import { Colors, Images } from 'src/utils'

import AppButton from 'src/components/AppButton'


const ScheduleModal = ({ setScheduleModal, scheduleModal }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={scheduleModal}
            onRequestClose={() => setScheduleModal(!scheduleModal)}
        >
            <TouchableWithoutFeedback style={styles.mainView} onPress={() => setScheduleModal(!scheduleModal)}>
                <View
                    onPress={() => setScheduleModal(!homeMoreModal)}
                    style={styles.mainView}>
                    <View style={styles.homeModalCard}>

                        <View
                            style={styles.itemContainer}>
                            <AppText txtStyle={styles.headingTxt}>Show trips starting from</AppText>
                        </View>
                        <View style={styles.btnContainer}>

                        <AppButton
                            btnTxt={"Time"}
                            // onPress={() => navigation.navigate("OnBoarding")}
                            ImageBack={Images.UpChevBlack}
                            customButtonStyle={styles.btnStyle}
                            buttonTextWithImage={{ color: "white" }}
                            rightImage
                            txtStyle={styles.btnTxt}
                        />
                        <AppButton
                            btnTxt={"Date"}
                            // onPress={() => navigation.navigate("OnBoarding")}
                            ImageBack={Images.UpChevBlack}
                            customButtonStyle={styles.btnStyle}
                            buttonTextWithImage={{ color: "white" }}
                            rightImage
                            txtStyle={styles.btnTxt}
                        />
                        </View>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};
export default ScheduleModal;









