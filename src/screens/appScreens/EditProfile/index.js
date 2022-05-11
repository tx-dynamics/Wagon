import React, { useState, useRef } from 'react'
import { StatusBar, Image, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Colors, Images } from 'src/utils'
import styles from './styles'
import AppText from 'src/components/AppText'
import Header from 'src/components/Header'

import ContactTextInput from 'src/components/ContactTextInput'
import AppButton from 'src/components/AppButton'
import { useSelector } from 'react-redux'

const EditProfile = () => {
    let navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [language, setLanguage] = useState('')

    const emailRef = useRef(null)
    const nameRef = useRef(null)
    const phoneRef = useRef(null)
    const languageRef = useRef(null)
    const switchApp = useSelector((state) => state.auth.switchApp)


    return (
        <SafeAreaView
            style={styles.container}>
            <StatusBar
                translucent={false}
                hidden={false}
                barStyle={"light-content"}
                backgroundColor={Colors.red} />
            <Header
                LeftImage={Images.LeftArrow}
                headerName={"Edit Profile"}
                headerNameShow
                headerCustomTxt={{ color: Colors.white }}
                headerContainer={{ backgroundColor: Colors.red }}
                customLeftImage={{ tintColor: Colors.white }}
                leftArrowIcon={() => navigation.goBack(null)} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
                <View style={styles.innerContainer}>

                    <View style={styles.cameraContainer}>
                        <Image source={Images.Camera} style={styles.cameraIcon}/>
                    </View>


                    <ContactTextInput
                        ref={nameRef}
                        headerName={"Name"}
                        multiline={false}
                        // value={name}
                        value={"David Hood"}
                        onChangeText={(txt) => setName(txt)}
                        headerNameShow
                        keyboardType={"default"}
                        returnKeyType={"next"}
                        mainCustomContianer={{ marginTop: 20 }}
                        blurOnSubmit={false}
                        EditPic
                        customInputStyle={{ paddingStart: 10 }}


                    />
                    <ContactTextInput
                        ref={phoneRef}
                        headerName={"Phone number"}
                        headerNameShow
                        multiline={false}
                        // value={email}
                        value={"+92 300 000000"}
                        onChangeText={(txt) => setEmail(txt)}
                        keyboardType={"phone-pad"}
                        autoCapitalize="none"
                        returnKeyType={"next"}
                        blurOnSubmit={false}
                        EditPic
                        customInputStyle={{ paddingStart: 10}}



                    />
                    <ContactTextInput
                        ref={emailRef}
                        headerName={"Email"}
                        headerNameShow
                        multiline={false}
                        // value={email}
                        value={"myemail@gmail.com"}
                        onChangeText={(txt) => setEmail(txt)}
                        keyboardType={"email-address"}
                        autoCapitalize="none"
                        returnKeyType={"next"}
                        blurOnSubmit={false}
                        EditPic
                        customInputStyle={{ paddingStart: 10 }}


                    />
                    {switchApp ? 
                      <ContactTextInput
                      ref={emailRef}
                      headerName={"City"}
                      headerNameShow
                      multiline={false}
                      // value={email}
                      value={"Newport"}
                      onChangeText={(txt) => setEmail(txt)}
                      keyboardType={"email-address"}
                      autoCapitalize="none"
                      returnKeyType={"next"}
                      blurOnSubmit={false}
                      EditPic
                      customInputStyle={{ paddingStart: 10 }}


                  />
                  :null
                    }
                    

                    <ContactTextInput
                        ref={languageRef}
                        headerName={"Language"}
                        headerNameShow
                        customInputStyle={{ paddingStart: 10 }}

                        // value={cPassword}
                        value={"English (united kingdom)"}
                        onChangeText={(txt) => setCPassword(txt)}
                        keyboardType="default"
                        autoCapitalize="none"
                        onPress={() => setDisplayCPassword(!displayCPassword)}
                        EditPic
                    />


                    <AppButton
                        btnTxt={"Save"}
                        onPress={() => navigation.navigate("Setting")}
                        customButtonStyle={styles.btnCustomStyle}
                    />




                </View>
            </ScrollView>



        </SafeAreaView>
    )
}

export default EditProfile
