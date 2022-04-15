import React,{useRef} from "react";
import {
    View,
    Platform,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import styles from "./styles";
import AppText from 'src/components/AppText'
import ContactTextInput from 'src/components/ContactTextInput'
import AppButton from 'src/components/AppButton'
import OTPCode from "src/components/Modal/OTPCode";

const ForgotPassword = ({ forgotPasswordRef }) => {
   
    const codePasswordRef = useRef()

    const handleForgotPassword = () => {
        // forgotPasswordRef.current.close()
        codePasswordRef.current.open()

    }


    return (
        <RBSheet
            ref={forgotPasswordRef}
            customStyles={{
                wrapper: {
                    backgroundColor: "rgba(196,196,196,0.6)",
                },
                container: {
                    paddingVertical: 40,
                    height:400,
                    paddingHorizontal: 20,
                    position: "absolute",
                    bottom: Platform.OS === "android" ? 0 : 0,
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,


                },
            }}
            animationType="slide"
        >
            <View>
                <AppText txtStyle={styles.forgotPasswordTxt}>Forgot Password</AppText>
                <AppText txtStyle={styles.forgotPasswordTxtDes}>Enter your email for the verification process, {'\n'}we will send 4 digit code to your email.</AppText>

                <ContactTextInput
                    headerName={"Email"}
                    multiline={false}
                    headerNameShow
                    keyboardType={"email-address"}
                    autoCapitalize="none"
                    returnKeyType={"done"}
                    mainCustomContianer={{ marginTop: 20, }}
                    customContainer={{ backgroundColor: "rgba(174, 0, 1, 0.1)" }}
                    placeHolder="alma.lawson@example.com"


                />
                <AppButton
                    btnTxt={"Continue"}
                    onPress={() => handleForgotPassword()}
                    leftButtonStyle={{ marginEnd: 0, }}
                    customButtonStyle={{ marginTop: 60, width: "100%" }}
                    txtStyle={{ color: "white", flex: 1, fontWeight: "bold", textAlign: "center" }}
                />
            </View>

        <OTPCode codePasswordRef ={codePasswordRef} forgotPasswordRef ={forgotPasswordRef}/>

        </RBSheet>
    );
};

export default ForgotPassword;