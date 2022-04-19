import React, { useState } from 'react'
import { StatusBar, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Colors, Images,Fonts } from 'src/utils'
import styles from './styles'
import AppText from 'src/components/AppText'
import ContactTextInput from 'src/components/ContactTextInput'
import AppButton from 'src/components/AppButton'
import Header from 'src/components/Header'
import DropDownPicker from 'react-native-dropdown-picker';

const PhoneNumber = () => {
    let navigation = useNavigation()

    const [phoneNumber, setPhoneNumber] = useState('')
    const [open, setOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [value, setValue] = useState(String("+1"));
    const [item, setItem] = useState([
        { label: '+1', value: '1' },
        { label: '+2', value: '2' },
        { label: '+92', value: '92' },
        { label: '+965', value: '965' }
    ]);

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
                headerName={"Enter your mobile number"}
                headerNameShow
                leftArrowIcon={() => navigation.goBack(null)} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
                <View style={styles.innerContainer}>
                    <View style={styles.numberContainer}>
                        <View style={styles.dropDownContainer}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={item}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItem}
                                listMode="SCROLLVIEW"
                                labelStyle={{
                                    fontWeight:"500", fontFamily:Fonts.Medium
                                }}
                                placeholderStyle={{
                                    color: Colors.lightgrey,
                                }}
                                scrollViewProps={{
                                    nestedScrollEnabled: true,
                                }}
                                style={[
                                    ,
                                    {
                                        borderColor: Colors.lightgrey,
                                        color: '#B7B7B7',
                                        backgroundColor: Colors.lightgrey,
                                    },
                                ]}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <ContactTextInput
                                multiline={false}
                                value={phoneNumber}
                                onChangeText={(txt) => setPhoneNumber(txt)}
                                keyboardType={"phone-pad"}
                                autoCapitalize="none"
                                returnKeyType={"done"}
                                maxLength={9}
                                mainCustomContianer={{ marginTop: 0, width: "100%" }}
                                blurOnSubmit={false}
                                customInputStyle={{fontWeight:"500", fontFamily:Fonts.Medium}}

                            />
                        </View>
                    </View>
                    <AppText txtStyle={styles.phoneNumberDes}>Lorem ipsum dolor sit amet, consectetur dipiscing Eget commodo et laoreet faucibus id sed est. Sit sit dignissim urna velit congue mattis.</AppText>
                    <View style={styles.checkboxContainer}>
                        {isChecked ?
                            <TouchableOpacity style={styles.checkMarkContainer}
                                onPress={() => { setIsChecked(false) }}>
                                <Image
                                    source={Images.Checked}
                                    style={styles.checkImage} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                onPress={() => { setIsChecked(true) }}
                                style={styles.checkMarkContainer} />
                        }
                        <AppText txtStyle={styles.agreeTxt}>I agree to the Terms and Conditions</AppText>
                    </View>
                    <AppButton
                        btnTxt={"Next"}
                        onPress={() => navigation.navigate("OTPVerify")}
                        customButtonStyle={styles.customBtnStyle}
                    />
                </View>
            </ScrollView>



        </SafeAreaView>
    )
}

export default PhoneNumber
