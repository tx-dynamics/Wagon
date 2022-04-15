import React, { useState, useRef } from 'react'
import { StatusBar, Image, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Colors, Images } from 'src/utils'
import styles from './styles'
import AppText from 'src/components/AppText'
import ContactTextInput from 'src/components/ContactTextInput'
import AppButton from 'src/components/AppButton'



const Signup = () => {
    let navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [name, setName] = useState('')
    const [displayPassword, setDisplayPassword] = useState(true)
    const [displayCPassword, setDisplayCPassword] = useState(true)

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const passwordCRef = useRef(null)
    const nameRef = useRef(null)

    return (
        <SafeAreaView
            style={styles.container}>
            <StatusBar
                translucent={false}
                hidden={false}
                barStyle={"dark-content"}
                backgroundColor={Colors.white} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
                <View style={{ marginHorizontal: 20, flex: 1 }}>
                    <Image
                        source={Images.LogoBackground}
                        style={styles.logoImage}
                        resizeMode={"contain"} />
                    <AppText txtStyle={styles.loginTxt}>Sign Up</AppText>
                    <AppText txtStyle={styles.welcomeWagon}>Welcome to wagon!</AppText>

                    <ContactTextInput
                        ref={nameRef}
                        headerName={"Name"}
                        multiline={false}
                        value={name}
                        onChangeText={(txt) => setName(txt)}
                        headerNameShow
                        keyboardType={"default"}
                        returnKeyType={"next"}
                        mainCustomContianer={{ marginTop: 20 }}
                        // onSubmitEditing={() => {
                        //     passwordRef.current.focus();
                        // }}
                        blurOnSubmit={false}

                    />
                    <ContactTextInput
                        ref={emailRef}
                        headerName={"Email"}
                        headerNameShow
                        multiline={false}
                        value={email}
                        onChangeText={(txt) => setEmail(txt)}
                        keyboardType={"email-address"}
                        autoCapitalize="none"
                        returnKeyType={"next"}
                        // onSubmitEditing={() => {
                        //     passwordRef.current.focus();
                        // }}
                        blurOnSubmit={false}

                    />
                    <ContactTextInput
                        ref={passwordRef}
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
                        secureText />

                    <ContactTextInput
                        ref={passwordCRef}
                        headerName={"Confirm Password"}
                        headerNameShow
                        value={cPassword}
                        onChangeText={(txt) => setCPassword(txt)}
                        keyboardType="default"
                        autoCapitalize="none"
                        eyeOpen={displayCPassword}
                        secureTextEntry={displayCPassword}
                        onPress={() => setDisplayCPassword(!displayCPassword)}
                        secureText />


                    <AppButton
                        btnTxt={"Sign Up"}
                        onPress={() => navigation.navigate("PhoneNumber")}
                        leftButtonStyle={{ marginEnd: 0, }}
                        customButtonStyle={{ marginTop: 30, width: "100%" }}
                        txtStyle={{ color: "white", flex: 1, fontWeight: "bold", textAlign: "center" }}
                    />

                    <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 25 }}>
                        <Image
                            source={Images.Facebook}
                            style={[styles.facebookImage, { marginRight: 10 }]}
                            resizeMode={"contain"} />

                        <Image
                            source={Images.Google}
                            style={[styles.facebookImage, { marginLeft: 10 }]}
                            resizeMode={"contain"} />
                    </View>

                    <View style={styles.signupContainer}>
                        <AppText>Already have an account?</AppText>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <AppText txtStyle={{ color: Colors.red }}> Sign In</AppText>
                       </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>



        </SafeAreaView>
    )
}

export default Signup