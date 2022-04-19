import React, { useState } from "react";
import {
    View,
    Platform,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import styles from "./styles";
import AppText from 'src/components/AppText'
import ContactTextInput from 'src/components/ContactTextInput'
import AppButton from 'src/components/AppButton'

const ResetPassword = ({ resetPasswordRef, codePasswordRef, forgotPasswordRef }) => {

    const [displayPassword, setDisplayPassword] = useState(true)
    const [displayCPassword, setDisplayCPassword] = useState(true)
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    const handleClose = () => {
        resetPasswordRef.current.close()
        codePasswordRef.current.close()
        forgotPasswordRef.current.close()
    }

    return (
        <RBSheet
            ref={resetPasswordRef}
            customStyles={{
                wrapper: {
                    backgroundColor: "rgba(196,196,196,0.6)",
                },
                container: {
                    paddingVertical: 40,
                    height: 500,
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
                <AppText txtStyle={styles.forgotPasswordTxt}>Reset password</AppText>
                <AppText txtStyle={styles.forgotPasswordTxtDes}>Set the new password of your account so{'\n'}you can login access all the features.</AppText>

                <ContactTextInput
                    headerName={"Password"}
                    headerNameShow
                    value={password}
                    returnKeyType={"next"}
                    onChangeText={(txt) => setPassword(txt)}
                    keyboardType="default"
                    autoCapitalize="none"
                    secureTextEntry={displayPassword}
                    eyeOpen={displayPassword}
                    onPress={() => setDisplayPassword(!displayPassword)}
                    customContainer={{ backgroundColor: "rgba(174, 0, 1, 0.1)" }}
                    secureText />
                <ContactTextInput
                    headerName={"Re enter password"}
                    headerNameShow
                    value={cPassword}
                    onChangeText={(txt) => setCPassword(txt)}
                    keyboardType="default"
                    autoCapitalize="none"
                    eyeOpen={displayCPassword}
                    secureTextEntry={displayCPassword}
                    onPress={() => setDisplayCPassword(!displayCPassword)}
                    customContainer={{ backgroundColor: "rgba(174, 0, 1, 0.1)" }}
                    secureText />
                <AppButton
                    btnTxt={"Reset password"}
                    onPress={() => handleClose()}
                    leftButtonStyle={{ marginEnd: 0, }}
                    customButtonStyle={{ marginTop: 60, width: "100%" }}
                />
            </View>


        </RBSheet>
    );
};

export default ResetPassword;