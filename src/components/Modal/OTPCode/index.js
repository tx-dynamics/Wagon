import React,{useState, useRef} from "react";
import {
    View,
    Platform,Text
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import styles from "./styles";
import AppText from 'src/components/AppText'
import AppButton from 'src/components/AppButton'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import ResetPassword from "src/components/Modal/ResetPassword";


const OTPCode = ({ codePasswordRef ,forgotPasswordRef }) => {
    const resetPasswordRef = useRef()


    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <RBSheet
            ref={codePasswordRef}
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
                <AppText txtStyle={styles.forgotPasswordTxt}>Ente 4 Digits Code</AppText>
                <AppText txtStyle={styles.forgotPasswordTxtDes}>Enter the 4 digit code you received on your email.</AppText>
                
                <CodeField
                        ref={ref}
                        {...props}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
            
                <AppButton
                    btnTxt={"Continue"}
                    onPress={() => resetPasswordRef.current.open()}
                    leftButtonStyle={{ marginEnd: 0, }}
                    customButtonStyle={{ marginTop: 60, width: "100%" }}
                    txtStyle={{ color: "white", flex: 1, fontWeight: "bold", textAlign: "center" }}
                />
            </View>
        <ResetPassword resetPasswordRef ={resetPasswordRef} forgotPasswordRef={forgotPasswordRef} codePasswordRef={codePasswordRef}/>


        </RBSheet>
    );
};

export default OTPCode;