import React from 'react'
import { StatusBar, Image, View, SafeAreaView } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Images, Colors } from 'src/utils'
import styles from './styles'
import Swiper from 'react-native-swiper'
import Apptext from 'src/components/AppText';
import AppButton from 'src/components/AppButton'
const OnBoarding = () => {
    let navigation = useNavigation()
    return (
        <SafeAreaView
            style={styles.container}>
            <StatusBar
                translucent={false}
                hidden={false}
                barStyle={"dark-content"}
                backgroundColor={Colors.white} />
            <View style={styles.innerContainer}>
                <Swiper
                    activeDotColor={Colors.red}
                    dotColor={"#E3E3E3"}>
                    <View style={styles.slide1}>
                        <Image
                            source={Images.OnBoardingOne}
                            style={styles.onBoardingImage}
                            resizeMode={"contain"} />
                        <Apptext txtStyle={styles.desTxt}>Adipiscing elit. Turpis diam elementum cursus porttitor facilisis.</Apptext>

                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={Images.OnBoardingThree}
                            style={styles.onBoardingImageTwo}
                            resizeMode={"contain"} />
                        <Apptext txtStyle={styles.desTxt}>Adipiscing elit. Turpis diam elementum cursus porttitor facilisis.</Apptext>

                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={Images.OnBoardingTwo}
                            style={styles.onBoardingImageThree}
                            resizeMode={"contain"} />
                        <Apptext txtStyle={styles.desTxt}>Adipiscing elit. Turpis diam elementum cursus porttitor facilisis.</Apptext>
                    </View>
                </Swiper>

            </View>
            <View style={styles.btnContainer}>
                <AppButton
                    btnTxt={"Get Started"}
                    onPress={() => navigation.navigate("Login")}
                />
            </View>
        </SafeAreaView>
    )
}

export default OnBoarding
