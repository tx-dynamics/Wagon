import React from 'react'
import { StatusBar, Image, View, SafeAreaView } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Colors, Images } from 'src/utils'
import styles from './styles'
import AppText from 'src/components/AppText'
import AppButton from 'src/components/AppButton'

const SelectParentorDrive = () => {
    let navigation = useNavigation()
    
    return (
        <SafeAreaView
            style={styles.container}>
            <StatusBar
                translucent={false}
                hidden={false}
                barStyle={"dark-content"}
                backgroundColor={Colors.white} />

            <View style={styles.containerOne}>
                <Image
                    source={Images.LogoBackground}
                    style={styles.logoImage}
                    resizeMode={"contain"} />
                <View style={styles.innerContainer}>
                    <AppText txtStyle={styles.welcomeTxt}>Welcome to</AppText>
                    <AppText txtStyle={[styles.welcomeTxt ,{color:Colors.red}]}> wagon</AppText>
                </View>

            </View>
            <View style={styles.containerOne}>
                <AppText txtStyle={styles.continueTxt}>Continue as</AppText>
                <AppButton
                    btnTxt={"Wagon Daily"}
                    onPress={() => navigation.navigate("OnBoarding")}
                    ImageBack={Images.RightChev}
                    customButtonStyle={styles.btnStyle}
                    buttonTextWithImage={{color:"white"}}
                    rightImage
                    txtStyle={styles.btnTxt}
                />
                <AppButton
                    btnTxt={"Wagon Business"}
                    onPress={() => alert("Comming Soon")}
                    customButtonStyle={styles.btnStyle}
                    buttonTextWithImage={{textAlign :"center"}}
                    txtStyle={styles.btnTxt}
                    ImageBack={Images.RightChev}
                    rightImage
                    />
            </View>
        </SafeAreaView>
    )
}

export default SelectParentorDrive
