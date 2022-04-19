import React, { useState } from 'react'
import { StatusBar, View, SafeAreaView, ScrollView, Text } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Colors, Images,Fonts } from 'src/utils'
import styles from './styles'
import AppButton from 'src/components/AppButton'
import Header from 'src/components/Header'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const PhoneNumber = () => {
    let navigation = useNavigation()

    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView
            style={styles.container}>
            <StatusBar
                translucent={false}
                hidden={false}
                barStyle={"dark-content"}
                backgroundColor={Colors.white} />
            <Header
                LeftImage={Images.LeftArrow}
                headerName={"Verify phone number"}
                headerNameShow
                leftArrowIcon={() => navigation.goBack(null)} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
                <View style={{ flex: 1, }}>
                    <View style={{ marginHorizontal: 6 }}>
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
                    </View>

                    <AppButton
                        btnTxt={"Continue"}
                        onPress={() => navigation.navigate("Signup")}
                        leftButtonStyle={{ marginEnd: 0, }}
                        customButtonStyle={{ marginTop: 90, width: "83%" }}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default PhoneNumber
