import React from "react";
import { View, Modal, TouchableWithoutFeedback ,Image} from "react-native";
import AppText from 'src/components/AppText'
import styles from "./styles";
import AppButton from 'src/components/AppButton'
import { useNavigation } from '@react-navigation/native'
import { Images } from 'src/utils'


const PaymentBooked = ({ paymentBookedModal , setPaymentBookedModal }) => {
    let navigation = useNavigation()

    const handleTripDetails = () => {
        setPaymentBookedModal(!paymentBookedModal)
        navigation.navigate("ChooseYourTrip")
    }


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={paymentBookedModal}
            onRequestClose={() => setPaymentBookedModal(!paymentBookedModal)}
        >
            <TouchableWithoutFeedback style={styles.mainView} onPress={() => setPaymentBookedModal(!paymentBookedModal)}>
                <View
                    onPress={() => setPaymentBookedModal(!homeMoreModal)}
                    style={styles.mainView}>
                    <View style={styles.homeModalCard}>
                        <Image source ={Images.ConfirmBooked} style={{height:98, width:98, alignSelf:"center"}} resizeMode={"cover"}/>
                        <AppText txtStyle={styles.headingTxt}>Booked</AppText>
                        <AppText txtStyle={styles.desTxt}>Your booking has been confirmed successfully</AppText>
                           
                            <AppButton
                                btnTxt={"Go the trip details"}
                                onPress={() => handleTripDetails()}
                                customButtonStyle={styles.btnLogin}
                                txtStyle={styles.btnTxt}

                            />
                    </View>

                </View>
            </TouchableWithoutFeedback>

        </Modal>
    );
};
export default PaymentBooked;









