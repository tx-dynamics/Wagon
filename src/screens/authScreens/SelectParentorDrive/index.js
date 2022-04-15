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

                    <AppText txtStyle={{fontSize:20}}>Welcome to</AppText>
                    <AppText txtStyle={{fontSize:20, color:Colors.red}}> wagon</AppText>
                </View>

            </View>
            <View style={{ height: "50%", justifyContent: "center" }}>
                <AppText txtStyle={{fontSize:18, fontWeight:"400"}}>Continue as</AppText>
                <AppButton
                    btnTxt={"Wagon Daily"}
                    onPress={() => navigation.navigate("OnBoarding")}
                    ImageBack={Images.RightChev}
                    customButtonStyle={{ marginTop: 21 }}
                    buttonTextWithImage={{color:"white"}}
                    txtStyle={{color:"white", marginStart:10, fontWeight:"bold"}}
                />
                <AppButton
                    btnTxt={"Wagon Business"}
                    onPress={() => alert("Comming Soon")}
                    customButtonStyle={{ marginTop: 21 }}
                    buttonTextWithImage={{textAlign :"center"}}
                    txtStyle={{color:"white", marginStart:10, fontWeight: "bold",}}
                    ImageBack={Images.RightChev}
                    />
            </View>
        </SafeAreaView>
    )
}

export default SelectParentorDrive
