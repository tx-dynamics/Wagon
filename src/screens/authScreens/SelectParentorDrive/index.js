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

            <View style={{ height: "50%", backgroundColor: "white", justifyContent: "center" }}>
                <Image
                    source={Images.LogoBackground}
                    style={styles.logoImage}
                    resizeMode={"contain"} />
                <View style={{ flexDirection: "row" , justifyContent:"center", marginTop:45}}>

                    <AppText style={styles.continueUs}>Welcome to</AppText>
                    <AppText style={styles.waganTxt}> wagon</AppText>
                </View>

            </View>
            <View style={{ height: "50%", justifyContent: "center" }}>
                <AppText style={styles.continueUs}>Continue as</AppText>
                <AppButton
                    buttonTitle={"Wagon Daily"}
                    onPress={() => alert("Helo")}
                    customStyle={{ marginTop: 21 }}
                    ImageButton={true}
                />
                <AppButton
                    buttonTitle={"Wagon Business"}
                    onPress={() => alert("Helo fr")}
                    customStyle={{ marginTop: 20 }}
                    ImageButton={false}


                />
            </View>
        </SafeAreaView>
    )
}

export default SelectParentorDrive
