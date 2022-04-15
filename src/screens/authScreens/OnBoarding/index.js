import React from 'react'
import { StatusBar, Image, View, SafeAreaView, Text } from "react-native"
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
            <View style={{ height: "75%", }}>
                <Swiper style={styles.wrapper}
                    activeDotColor={Colors.red}
                    dotColor={"#E3E3E3"}>
                    <View style={styles.slide1}>
                        <Image
                            source={Images.OnBoardingOne}
                            style={styles.onBoardingImage}
                            resizeMode={"contain"} />
                        <Apptext txtStyle={{ fontWeight: "400", position: "absolute", bottom: 60, }}>Adipiscing elit. Turpis diam elementum cursus porttitor facilisis.</Apptext>

                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={Images.OnBoardingThree}
                            style={styles.onBoardingImageTwo}
                            resizeMode={"contain"} />
                        <Apptext txtStyle={{ fontWeight: "400", position: "absolute", bottom: 60 }}>Adipiscing elit. Turpis diam elementum cursus porttitor facilisis.</Apptext>

                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={Images.OnBoardingTwo}
                            style={styles.onBoardingImageThree}
                            resizeMode={"contain"} />
                        <Apptext txtStyle={{ fontWeight: "400", position: "absolute", bottom: 60, }}>Adipiscing elit. Turpis diam elementum cursus porttitor facilisis.</Apptext>
                    </View>
                </Swiper>

            </View>
            <View style={{ height: "25%", backgroundColor: "white", justifyContent: "center" }}>
                <AppButton
                    btnTxt={"Get Started"}
                    onPress={() => navigation.navigate("Login")}
                    leftButtonStyle={{marginEnd:0}}
                    txtStyle={{ color: "white", flex: 1, fontWeight: "bold", textAlign: "center" }}
                />
            </View>
        </SafeAreaView>
    )
}

export default OnBoarding
