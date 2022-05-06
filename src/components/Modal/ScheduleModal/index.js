import React, { useState } from "react";
import { View, Modal, TouchableWithoutFeedback } from "react-native";
import AppText from 'src/components/AppText'
import { useIsFocused, useNavigation } from '@react-navigation/native'

import styles from "./styles";
import { Images } from 'src/utils'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import AppButton from 'src/components/AppButton'


const ScheduleModal = ({ setScheduleModal, scheduleModal}) => {
    let navigation = useNavigation()


    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisible(true)
        setScheduleModal(!scheduleModal)
    }
    const showTimePicker = () => {
        setTimePickerVisible(true)
        setScheduleModal(!scheduleModal)
    }
    const hideDatePicker = () => {
        setDatePickerVisible(false)
        setTimePickerVisible(false);
        navigation.navigate("SearchYourTrip")

    };
    const hideTimePicker = () => {
        setTimePickerVisible(false);
    };
    const handleConfirm = (date) => {
        // const selectedDate = moment(date).format('DD/MM/YYYY');
        console.log("date => " , date)
        // setDate(selectedDate)
        hideDatePicker();
    };
    const handleConfirmTime = (time) => {
        setDatePickerVisible(false)
        console.log("Time => " , time)
        hideTimePicker();
        console.log("Before => ", isDatePickerVisible)

        setDatePickerVisible(true)
        console.log("After => ", isDatePickerVisible)
     };
    return (
        <View>
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
                                    onPress={() => showTimePicker()}
                                    ImageBack={Images.UpChevBlack}
                                    customButtonStyle={styles.btnStyle}
                                    buttonTextWithImage={{ color: "white" }}
                                    rightImage
                                    txtStyle={styles.btnTxt}
                                />
                                <AppButton
                                    btnTxt={"Date"}
                                    onPress={() => showDatePicker()}
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

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}
            />


        </View>

    );
};
export default ScheduleModal;









