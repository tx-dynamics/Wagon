import React, { useState, useRef } from 'react'
import { StatusBar, Image, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Colors, Images } from 'src/utils'
import styles from './styles'
import AppText from 'src/components/AppText'
import ContactTextInput from 'src/components/ContactTextInput'
import AppButton from 'src/components/AppButton'
import ForgotPassword from 'src/components/Modal/ForgotPassword'
import { useDispatch } from "react-redux"
import { setUser } from 'src/redux/actions/authActions'



const Login = () => {
    let navigation = useNavigation()
    let dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayPassword, setDisplayPassword] = useState(true)

    const emailRef = useRef()
    const passwordRef = useRef()
    const forgotPasswordRef = useRef()


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
                    <AppText txtStyle={styles.loginTxt}>Log In</AppText>
                    <AppText txtStyle={styles.welcomeWagon}>Welcome to wagon!</AppText>

                    <ContactTextInput
                        ref={emailRef}
                        headerName={"Email"}
                        multiline={false}
                        value={email}
                        headerNameShow
                        onChangeText={(txt) => setEmail(txt)}
                        keyboardType={"email-address"}
                        autoCapitalize="none"
                        returnKeyType={"next"}
                        mainCustomContianer={{ marginTop: 20 }}
                        blurOnSubmit={false}

                    />
                     
                    <ContactTextInput
                        ref={passwordRef}
                        headerName={"Password"}
                        value={password}
                        onChangeText={(txt) => setPassword(txt)}
                        keyboardType="default"
                        headerNameShow
                        autoCapitalize="none"
                        secureTextEntry={displayPassword}
                        eyeOpen={displayPassword}
                        onPress={() => setDisplayPassword(!displayPassword)}
                        secureText />
                    <TouchableOpacity onPress={() => forgotPasswordRef.current.open()}>
                        <AppText txtStyle={styles.forgotPassword}>Forgot password?</AppText>
                    </TouchableOpacity>

                    <AppButton
                        btnTxt={"Log In"}
                        onPress={() => dispatch(setUser(true))}
                        leftButtonStyle={{ marginEnd: 0, }}
                        customButtonStyle={{ marginTop: 30, width: "100%" }}
                        txtStyle={{ color: "white", flex: 1, fontWeight: "bold", textAlign: "center" }}
                    />
                    <AppText txtStyle={styles.orWithTxt}>Or with</AppText>

                    <View style={{ flexDirection: "row", justifyContent: "center", }}>
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
                        <AppText>Don’t have any account?</AppText>
                        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                            <AppText txtStyle={{ color: Colors.red }}> Sign Up</AppText>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>

            <ForgotPassword forgotPasswordRef ={forgotPasswordRef}/>



        </SafeAreaView>
    )
}

export default Login
